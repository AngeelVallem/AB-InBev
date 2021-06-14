import React from "react";

import Button from "./Button";

export default function FollowButton({isFollowing, username , setFollow , setUnFollow,refresh}) {

console.log(username);

  if (!isFollowing) {
    return (
      <Button
        text="Follow"
        padding="0px"
        onPress={async () => {
          await setFollow(username);
          refresh();
        }}
      />
    );
  }

  return (
    <Button
      text="Unfollow"
      padding="0px"
      onPress={async () => {
        await setUnFollow(username);
        refresh();
      }}
    />
  );
}
