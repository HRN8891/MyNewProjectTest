const styles = ( {
  colors: {
    BackgroundColor,
    PrimaryText
  } 
}: {
  colors: {
    BackgroundColor: string;
    PrimaryText: string;
  };
}) => ({
  constainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BackgroundColor
  },
  textStyle: {
    color: PrimaryText,
    fontSize: 25,
  },
});

export default styles;
