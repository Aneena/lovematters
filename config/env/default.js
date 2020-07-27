'use strict';

module.exports = {
  app: {
    title: 'Bible4Kids',
    description: 'Presenting Bible in a kids friendly manner',
    keywords: 'mongodb, express, angularjs, node.js, mongoose, passport',
    googleAnalyticsTrackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'GOOGLE_ANALYTICS_TRACKING_ID'
  },
  port: process.env.PORT || 3000,
  templateEngine: 'swig',
  sessionSecret: 'MEAN',
  sessionCollection: 'sessions',
  logo: 'modules/core/img/brand/bible4kidslogo.png',
  favicon: 'modules/core/img/brand/favicon.ico'
};
