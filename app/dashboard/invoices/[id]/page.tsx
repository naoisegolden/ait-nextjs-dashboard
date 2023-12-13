export default function Page({ params }: { params: { id: number } }) {
    return <div>Invoice ID #{params.id}</div>
  }