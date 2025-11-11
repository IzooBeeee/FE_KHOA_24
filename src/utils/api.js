import tenant from '../config/tenant.json';

export function apiUrl(path) {
  const base = tenant.base_url?.replace(/\/+$/, '') || '';
  const tid = tenant.tenant_id?.replace(/^\/+|\/+$/g, '') || '';
  const p = String(path || '').replace(/^\/+/, '');
  return `${base}/${tid}/${p}`;
}

export default apiUrl;


