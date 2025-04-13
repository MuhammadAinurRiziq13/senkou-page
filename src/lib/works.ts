import { WORKS } from '@senkou/constants/works';

export async function getWorksById(id: string) {
  await new Promise(resolve => setTimeout(resolve, 300));
  const work = WORKS.find(work => work.id === id);
  return work || null;
}
