import { getImageUrl } from "../utils.js";

export default function Avatar({
  name,
  imageUrl,
  imageSize = 80,
  profession
}) {
  return (
    <div class="flex-row">
      <img
        className="avatar"
        src={getImageUrl(imageUrl)}
        alt={name}
        width={imageSize}
        height={imageSize}
        />
      <div className="flex-column-centered-m profile-info">
        <h2>{name}</h2>
        <p className="text-muted profile-profession">{profession}</p>
      </div>
    </div>
  );
  
}