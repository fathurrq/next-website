export default function PublicationContainer(props: React.PropsWithChildren) {
  return (
    <div className="grid relative grid-cols-1 md:grid-cols-3 gap-6 -top-16 md:-top-48 px-6 md:px-24">
      {props.children}
    </div>
  );
}
