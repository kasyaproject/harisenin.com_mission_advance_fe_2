import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface PropTypes {
  src: string;
  className?: string;
}

const AvatarProfile = (props: PropTypes) => {
  const { src, className } = props;

  return (
    <Avatar className={`${className} `}>
      <AvatarImage src={src} />
      <AvatarFallback>avatar</AvatarFallback>
    </Avatar>
  );
};

export default AvatarProfile;
