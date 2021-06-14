import React from "react";
import { Provider, FAB, Portal } from "react-native-paper";
import { colors } from '../../../application/Common/Globals'

export default function ActionsButon({
  isOpen,
  onChangeOpen,
  navigation,
  id,
  isFavorite,
  setFavorite,
  setUnFavorite,
  refresh,
}) {
  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={isOpen}
          icon={isOpen ? "minus" : "plus"}
          color="#000"
          fabStyle={{
            backgroundColor: colors.bannersColor,
          }}
          actions={[
            {
              icon: isFavorite ? "star" : "star-outline",
              label: isFavorite ? "Unfavorite" : "Add Favorite",
              color: "#F3CB60",
              onPress: async () =>
                !isFavorite
                  ? (await setFavorite(id), refresh())
                  : (await setUnFavorite(id), refresh()),
            },
            {
              icon: "comment",
              label: "Comments",
              color: "#000",
              onPress: () => navigation.push("Comments", id),
            },
          ]}
          onStateChange={() => onChangeOpen(!isOpen)}
        />
      </Portal>
    </Provider>
  );
}
