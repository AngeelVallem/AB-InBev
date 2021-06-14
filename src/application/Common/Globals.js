export const colors = {
  primary: "#F5B200",
  secondary: "#E7E7E7",
  bannersColor: "#F3CB60",
  borderGray: "#DADADA",
};

export const getDate = {
  month: (date) => new Date(date).toLocaleString("default", { month: "long" }),
  day: (date) => new Date(date).getUTCDate(),
};


//ACTIONS



//Common static styles
export const styles = {
  //styled styles
  shadow: `
        marginVertical: 10px
         borderWidth: 1px
         borderColor: ${colors.secondary}
         marginHorizontal: 10px
         paddingVertical : 10px
    `,

  //stylsheet styles
  addArticleButton: {
    marginLeft: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    maxWidth: `${90}%`,
    borderColor: colors.borderGray,
  },

  header : {
    marginTop : 20,
    paddingHorizontal : 20  
  }
};
