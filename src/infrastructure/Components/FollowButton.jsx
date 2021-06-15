import React from "react";

import Button from "./Button";

export default function FollowButton({
  isFollowing,
  username,
  setFollow,
  setUnFollow,
  refresh,
  currentUser,
  navigation,
}) {
  if (!isFollowing) {
    return (
      <Button
        text="Follow"
        padding="0px"
        onPress={async () => {
          if (!currentUser) {
            return navigation.push("Forms");
          }
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
        if (!currentUser) {
          return navigation.push("Forms");
        }
        await setUnFollow(username);
        refresh();
      }}
    />
  );
}
