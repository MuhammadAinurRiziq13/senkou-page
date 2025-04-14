import { SERVICES } from '@senkou/constants/services';

export async function getServicesById(id: string) {
  await new Promise(resolve => setTimeout(resolve, 300));
  const service = SERVICES.find(service => service.id === id);
  return service || null;
}
