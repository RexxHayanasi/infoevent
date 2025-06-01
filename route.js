/**
 * Archave Community API - Route Definitions
 * 
 * File ini berisi kumpulan path URL untuk website dan API Archave Community.
 * Gunakan agar URL terpusat, mudah dipanggil, dan minim typo.
 * 
 * Created by Rexxzy
 * Last updated: 2025-06-01
 */

const routes = {
  // Website routes
  home: '/',
  events: '/events',
  eventDetail: (id) => `/events/${id}`
  

  // API routes
  api: {
    base: '/api',
    events: '/api/events',
    eventById: (id) => `/api/events/${id}`
  };

export default routes;
