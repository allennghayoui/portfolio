import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfilePicture = () => {
  return (
    <Avatar className="size-20 sm:size-32 md:size-40 lg:size-60 xl:size-80">
      <AvatarImage
        src={"https://utfs.io/f/d845886d-9269-40a1-82d7-3823e96d2d14-ypdtw.jpg"}
        alt="Profile Picture"
      />
      <AvatarFallback>AN</AvatarFallback>
    </Avatar>
  );
};

export default ProfilePicture;
