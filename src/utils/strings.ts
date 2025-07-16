export const getQuery = (id: string | null, type: string) =>
  `&filter={"where":{"id_${type}": ${id}}}`
