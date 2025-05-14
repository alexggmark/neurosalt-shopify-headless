export async function datoFetch<T>({
  query,
  variables,
  preview = false,
}: {
  query: string;
  variables?: Record<string, any>;
  preview?: boolean;
}): Promise<T> {
  const res = await fetch(preview ? 'https://graphql.datocms.com/preview' : 'https://graphql.datocms.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN || ''}`,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 }, // ISR / caching
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('DatoCMS API error');
  }

  return json.data;
}
