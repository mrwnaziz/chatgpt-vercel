import { FC } from 'react';

const SystemAvatar: FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
  <img
    width={32}
    height={32}
    style={{ background: 'black', marginTop: 0, padding: 4, borderRadius: 4 }}
    {...props}
    src="/mbrcgi-icon.png"
  />
);

export default SystemAvatar;
