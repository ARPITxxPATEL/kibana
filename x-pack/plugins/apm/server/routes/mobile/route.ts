/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import * as t from 'io-ts';
import { toNumberRt } from '@kbn/io-ts-utils';
import { getApmEventClient } from '../../lib/helpers/get_apm_event_client';
import { createApmServerRoute } from '../apm_routes/create_apm_server_route';
import { environmentRt, kueryRt, rangeRt } from '../default_api_types';
import { offsetRt } from '../../../common/comparison_rt';
import {
  getMobileHttpRequests,
  HttpRequestsTimeseries,
} from './get_mobile_http_requests';
import { getMobileFilters, MobileFiltersResponse } from './get_mobile_filters';
import { getMobileSessions, SessionsTimeseries } from './get_mobile_sessions';
import { getMobileStatsPeriods, MobilePeriodStats } from './get_mobile_stats';
import {
  getMobileLocationStatsPeriods,
  MobileLocationStats,
} from './get_mobile_location_stats';
import {
  getMobileTermsByField,
  MobileTermsByFieldResponse,
} from './get_mobile_terms_by_field';
import {
  getMobileMostUsedCharts,
  MobileMostUsedChartResponse,
} from './get_mobile_most_used_charts/get_device_os_app_charts';
import {
  getMobileMostUsedNCTCharts,
  MobileMostUsedNCTChartResponse,
} from './get_mobile_most_used_charts/get_nct_chart';
import { MobilePropertyType } from '../../../common/mobile_types';

const mobileFiltersRoute = createApmServerRoute({
  endpoint: 'GET /internal/apm/services/{serviceName}/mobile/filters',
  params: t.type({
    path: t.type({
      serviceName: t.string,
    }),
    query: t.intersection([
      kueryRt,
      rangeRt,
      environmentRt,
      t.partial({
        transactionType: t.string,
      }),
    ]),
  }),
  options: { tags: ['access:apm'] },
  handler: async (
    resources
  ): Promise<{
    mobileFilters: MobileFiltersResponse;
  }> => {
    const apmEventClient = await getApmEventClient(resources);
    const { params } = resources;
    const { serviceName } = params.path;
    const { kuery, environment, start, end, transactionType } = params.query;

    const filters = await getMobileFilters({
      kuery,
      environment,
      transactionType,
      start,
      end,
      serviceName,
      apmEventClient,
    });
    return { mobileFilters: filters };
  },
});

const mobileChartsRoute = createApmServerRoute({
  endpoint: 'GET /internal/apm/mobile-services/{serviceName}/most_used_charts',
  params: t.type({
    path: t.type({
      serviceName: t.string,
    }),
    query: t.intersection([
      kueryRt,
      rangeRt,
      environmentRt,
      t.partial({
        transactionType: t.string,
      }),
    ]),
  }),
  options: { tags: ['access:apm'] },
  handler: async (
    resources
  ): Promise<{
    mostUsedCharts: Array<{
      key: MobilePropertyType;
      options: MobileMostUsedChartResponse[number]['options'] &
        MobileMostUsedNCTChartResponse['options'];
    }>;
  }> => {
    const apmEventClient = await getApmEventClient(resources);
    const { params } = resources;
    const { serviceName } = params.path;
    const { kuery, environment, start, end, transactionType } = params.query;

    const [deviceOsAndAppVersionChart, nctChart] = await Promise.all([
      getMobileMostUsedCharts({
        kuery,
        environment,
        transactionType,
        start,
        end,
        serviceName,
        apmEventClient,
      }),
      getMobileMostUsedNCTCharts({
        kuery,
        environment,
        start,
        end,
        serviceName,
        apmEventClient,
      }),
    ]);

    return { mostUsedCharts: [...deviceOsAndAppVersionChart, nctChart] };
  },
});

const mobileStatsRoute = createApmServerRoute({
  endpoint: 'GET /internal/apm/mobile-services/{serviceName}/stats',
  params: t.type({
    path: t.type({
      serviceName: t.string,
    }),
    query: t.intersection([
      kueryRt,
      rangeRt,
      environmentRt,
      offsetRt,
      t.partial({
        transactionType: t.string,
      }),
    ]),
  }),
  options: { tags: ['access:apm'] },
  handler: async (resources): Promise<MobilePeriodStats> => {
    const apmEventClient = await getApmEventClient(resources);
    const { params } = resources;
    const { serviceName } = params.path;
    const { kuery, environment, start, end, offset } = params.query;

    const stats = await getMobileStatsPeriods({
      kuery,
      environment,
      start,
      end,
      serviceName,
      apmEventClient,
      offset,
    });

    return stats;
  },
});

const mobileLocationStatsRoute = createApmServerRoute({
  endpoint: 'GET /internal/apm/mobile-services/{serviceName}/location/stats',
  params: t.type({
    path: t.type({
      serviceName: t.string,
    }),
    query: t.intersection([
      kueryRt,
      rangeRt,
      environmentRt,
      offsetRt,
      t.partial({
        locationField: t.string,
      }),
    ]),
  }),
  options: { tags: ['access:apm'] },
  handler: async (resources): Promise<MobileLocationStats> => {
    const apmEventClient = await getApmEventClient(resources);
    const { params } = resources;
    const { serviceName } = params.path;
    const { kuery, environment, start, end, locationField, offset } =
      params.query;

    const locationStats = await getMobileLocationStatsPeriods({
      kuery,
      environment,
      start,
      end,
      serviceName,
      apmEventClient,
      locationField,
      offset,
    });

    return locationStats;
  },
});

const sessionsChartRoute = createApmServerRoute({
  endpoint:
    'GET /internal/apm/mobile-services/{serviceName}/transactions/charts/sessions',
  params: t.type({
    path: t.type({
      serviceName: t.string,
    }),
    query: t.intersection([
      kueryRt,
      rangeRt,
      environmentRt,
      offsetRt,
      t.partial({
        transactionType: t.string,
        transactionName: t.string,
      }),
    ]),
  }),
  options: { tags: ['access:apm'] },
  handler: async (resources): Promise<SessionsTimeseries> => {
    const apmEventClient = await getApmEventClient(resources);
    const { params } = resources;
    const { serviceName } = params.path;
    const { kuery, environment, start, end, transactionName, offset } =
      params.query;

    const { currentPeriod, previousPeriod } = await getMobileSessions({
      kuery,
      environment,
      transactionName,
      start,
      end,
      serviceName,
      apmEventClient,
      offset,
    });

    return { currentPeriod, previousPeriod };
  },
});

const httpRequestsChartRoute = createApmServerRoute({
  endpoint:
    'GET /internal/apm/mobile-services/{serviceName}/transactions/charts/http_requests',
  params: t.type({
    path: t.type({
      serviceName: t.string,
    }),
    query: t.intersection([
      kueryRt,
      rangeRt,
      environmentRt,
      offsetRt,
      t.partial({
        transactionType: t.string,
        transactionName: t.string,
      }),
    ]),
  }),
  options: { tags: ['access:apm'] },
  handler: async (resources): Promise<HttpRequestsTimeseries> => {
    const apmEventClient = await getApmEventClient(resources);
    const { params } = resources;
    const { serviceName } = params.path;
    const { kuery, environment, start, end, transactionName, offset } =
      params.query;

    const { currentPeriod, previousPeriod } = await getMobileHttpRequests({
      kuery,
      environment,
      transactionName,
      start,
      end,
      serviceName,
      apmEventClient,
      offset,
    });

    return { currentPeriod, previousPeriod };
  },
});

const mobileTermsByFieldRoute = createApmServerRoute({
  endpoint: 'GET /internal/apm/mobile-services/{serviceName}/terms',
  params: t.type({
    path: t.type({
      serviceName: t.string,
    }),
    query: t.intersection([
      kueryRt,
      rangeRt,
      environmentRt,
      t.type({
        size: toNumberRt,
        fieldName: t.string,
      }),
    ]),
  }),
  options: { tags: ['access:apm'] },
  handler: async (
    resources
  ): Promise<{
    terms: MobileTermsByFieldResponse;
  }> => {
    const apmEventClient = await getApmEventClient(resources);
    const { params } = resources;
    const { serviceName } = params.path;
    const { kuery, environment, start, end, size, fieldName } = params.query;

    const terms = await getMobileTermsByField({
      kuery,
      environment,
      start,
      end,
      serviceName,
      apmEventClient,
      fieldName,
      size,
    });

    return { terms };
  },
});

export const mobileRouteRepository = {
  ...mobileFiltersRoute,
  ...mobileChartsRoute,
  ...sessionsChartRoute,
  ...httpRequestsChartRoute,
  ...mobileStatsRoute,
  ...mobileLocationStatsRoute,
  ...mobileTermsByFieldRoute,
};
