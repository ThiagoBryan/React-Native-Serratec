import { LinearGradient } from "expo-linear-gradient";

const Gradiente = (props) => {
 
  if (props.posicao == "top") {
    return (
      <LinearGradient
        colors={["#3D3C3C", "#FEBC38"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "50%",
          zIndex: -1,
        }}
      />
    );
  } else{
    return (
      <LinearGradient
        colors={[ "#FEBC38", "#3D3C3C"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "51%",
          zIndex: -1,
        }}
      />
    );
  }
};

export default Gradiente;
