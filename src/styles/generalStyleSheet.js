import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  addButton: {
    borderWidth: 1,
    fontSize: 12,
    padding: 10,
    textAlign: "center",
    borderRadius: 50,
  },
  nextButtonContainer: {
    flexDirection: "row-reverse",
    marginBottom: 40,
    marginLeft: 40,
  },
  buttonContainer: {
    flexDirection: "column",
    flex: 1,
    paddingBottom: 10,
  },
  itemText: {
    marginTop: 16,
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
  itemTextSelected: {
    marginTop: 16,
    color: "#7deb34",
    fontSize: 15,
    fontWeight: "bold",
  },
  touchableOpacityContainer: {
    flexDirection: "column",
    padding: 20,
  },
  elementsContainer: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 15,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 10,
  },
  container: {
    flex: 16,
    paddingVertical: 10,
    position: "relative",
  },
  signOutText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "right",
    paddingLeft: 10,
  },
  signOutContainer: {
    // alignItems: 'left',
    // justifyContent: 'left',
    // paddingTop: 5,
    // paddingBottom: 5
    flexDirection: "row",
  },
  addEmotionContainer: {
    flex: 1,
    alignItems: "center",
  },

  subText: {
    fontSize: 15,
  },
  scrollView: {
    height: 50,
  },
  selected: {
    backgroundColor: "#9c85ab",
  },
  item: {
    marginTop: 16,
    marginHorizontal: 10,
  },
  sliderContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  slider: {
    width: 300,
    height: 40,
  },
  emotionsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignSelf: "flex-end",
    position: "absolute",
  },
  icon: {
    width: 50,
    height: 50,
    marginTop: 16,
    marginHorizontal: 10,
  },
  itemsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#ddd",
    fontSize: 20,
    fontWeight: "bold",
  },
  bottomBtn: {
    flex: 1,
    justifyContent: "flex-end",
    bottom: 50,
    alignItems: "center",
  },
  nextButton: {
    width: 100,
    padding: 15,
    backgroundColor: "#36C9C6",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  nextText: {
    color: "white",
    fontSize: 25,
  },
  averageCircleContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 10,
  },
});
