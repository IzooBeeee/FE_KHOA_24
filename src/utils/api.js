import tenant from '../config/tenant.json';

export function apiUrl(path) {
  const base = tenant.base_url?.replace(/\/+$/, '') || '';
  const tid = tenant.tenant_id?.replace(/^\/+|\/+$/g, '') || '';
  const p = String(path || '').replace(/^\/+/, '');
  
  // Nếu tenant_id rỗng, không thêm dấu / thừa
  if (tid) {
    return `${base}/${tid}/${p}`;
  }
  return `${base}/${p}`;
}

export default apiUrl;