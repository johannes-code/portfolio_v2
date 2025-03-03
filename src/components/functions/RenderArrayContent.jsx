export const RenderArrayContent = (array, title) => {
  return (
    <div>
      <h3>{title}</h3>
      {array.map((item, index) => (
        <div key={index}>
          <p>
            <b>{item.heading}</b>
          </p>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};
