// app/components/PageHead.tsx
interface PropTypes {
  title?: string;
}

const PageHead = ({ title }: PropTypes) => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>

      <link rel="icon" href="/img/logo.png" type="image/x-icon" />
    </>
  );
};

export default PageHead;
