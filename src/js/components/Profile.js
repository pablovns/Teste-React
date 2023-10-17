import Avatar from "./Avatar.js";

export default function Profile({
  name,
  imageUrl,
  imageSize,
  profession,
  nAwards,
  awards,
  discoverys,
}) {
  return (
    <section className="profile">
      <Avatar
        name={name}
        imageUrl={imageUrl}
        imageSize={imageSize}
        profession={profession}
      ></Avatar>
      <ul>
        <li>
          <b>Awards: {nAwards} </b>
          {awards}
        </li>
        <li>
          <b>Discovered: </b>
          {discoverys}
        </li>
      </ul>
    </section>
  );
}
