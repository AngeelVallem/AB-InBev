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
  currentUser
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
              onPress: async () =>{
                if(!currentUser){
                 return  navigation.push('Forms')
                }

                if(!isFavorite){
                  return await setFavorite(id), refresh()
                }
                return await setUnFavorite(id), refresh()
              }
            },
            {
              icon: "comment",
              label: "Comments",
              color: "#000",
              onPress: () => {
                if(!currentUser){
                  return navigation.push('Forms')
                }
                navigation.push("Comments", id)
              },
            },
          ]}
          onStateChange={() => onChangeOpen(!isOpen)}
        />
      </Portal>
    </Provider>
  );
}
