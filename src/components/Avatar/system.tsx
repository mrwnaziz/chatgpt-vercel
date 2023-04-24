import { FC } from 'react';

const SystemAvatar: FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
  <img
    className="bg-gray-600 px-2 py-2"
    width={32}
    height={32}
    {...props}
    src="/mbrcgi-icon.png"
  />
);

export default SystemAvatar;
