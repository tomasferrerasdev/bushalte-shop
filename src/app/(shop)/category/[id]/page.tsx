import { notFound } from 'next/navigation';

interface Props {
  params: {
    id: string;
  };
}

export default function Home({ params }: Props) {
  const { id } = params;
  if (id === 'app') {
    notFound();
  }
  return (
    <div>
      <h1>CATEGORY {id}</h1>
    </div>
  );
}
