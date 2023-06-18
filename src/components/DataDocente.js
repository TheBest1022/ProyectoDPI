import { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useGlobal } from "../context/GlobalProvider";

const DataDocente = ({ data }) => {
  const navegation = useNavigation();
  const { auth, obtenerMensaje } = useGlobal();
  const [visual, setVisual] = useState([]);
  const [auditiva, setAuditiva] = useState([]);
  const [infantil, setInfantil] = useState([]);
  const [atencion, setAtencion] = useState([]);
  const [lenguaje, setLenguaje] = useState([]);
  const [habilidades, setHabilidades] = useState([]);
  const [matematico, setMatematico] = useState([]);

  const material = {
    uri: "https://www.dropbox.com/s/3uofhlg0ioqo8d5/materiales.png?dl=1",
  };
  const us = { uri: "https://www.dropbox.com/s/82ndp0y2qu9zvre/use.png?dl=1" };
  const mensaje = {
    uri: "https://www.dropbox.com/s/bhd5ln4nq1s29js/mensaje.png?dl=1",
  };

  const handleclick = (idCurso) => {
    if (idCurso == 1) {
      navegation.navigate("visual", { id: idCurso });
    }
    if (idCurso == 2) {
      navegation.navigate("Auditiva", { id: idCurso });
    }
    if (idCurso == 3) {
      navegation.navigate("Psicomotrocidad", { id: idCurso });
    }
    if (idCurso == 4) {
      navegation.navigate("Atencion", { id: idCurso });
    }
    if (idCurso == 5) {
      navegation.navigate("Lenguaje", { id: idCurso });
    }
    if (idCurso == 6) {
      navegation.navigate("Habilidades", { id: idCurso });
    }
    if (idCurso == 7) {
      navegation.navigate("Matematico", { id: idCurso });
    }
  };
  const mensajes = (id) => {
    navegation.navigate("mensaje", { id: id });
  };

  /**/
 const renderData = (data, id) => {
    const filter = data.filter((item) => {
      return item.idDocente == id;
    });
    if (id != undefined) {
      return (
        <View>
          {filter.map((item, index) => (
            <View style={style.contenedor} key={index}>
              <View style={style.texto}>
                <Text style={style.descripcion}>{item.Descripción}</Text>
              </View>
              <View style={style.foto}>
                <View style={style.contexto}>
                  <View style={style.linea} />
                  <View style={style.contenedoriconos}>
                    <View>
                      <ImageBackground
                        source={us}
                        style={style.icono}
                      ></ImageBackground>
                    </View>
                    <View style={style.textociencia}>
                      <Text style={style.des}>
                        DOCENTE : {item.Nombre} {item.Apellido}
                      </Text>
                    </View>
                  </View>
                  <View style={style.linea} />
                  <View style={style.contenedoriconos}>
                    <View style={style.temas}>
                      <TouchableOpacity
                        onPress={() => {
                          handleclick(item.idCurso);
                        }}
                      >
                        <View style={style.imagenes}>
                          <ImageBackground
                            source={material}
                            style={style.icon}
                          ></ImageBackground>
                        </View>
                        <View style={style.centrar}>
                          <Text style={style.rec}>MATERIAL</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={style.temas}>
                      <TouchableOpacity
                        onPress={() => {
                          mensajes(item.idCurso);
                        }}
                      >
                        <View style={style.imagenes}>
                          <ImageBackground
                            source={mensaje}
                            style={style.icn}
                          ></ImageBackground>
                        </View>
                        <View style={style.centrar}>
                          <Text style={style.rec}>
                            MENSAJES &nbsp;
                            {item.idCurso == 1
                              ? visual.length
                              : item.idCurso == 2
                              ? auditiva.length
                              : item.idCurso == 3
                              ? infantil.length
                              : item.idCurso == 4
                              ? atencion.length
                              : item.idCurso == 5
                              ? lenguaje.length
                              : item.idCurso == 6
                              ? habilidades.length
                              : item.idCurso == 7
                              ? matematico.length
                              : ""}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      );
    } else {
      return (
        <View>
          {data.map((item, index) => (
            <View style={style.contenedor} key={index}>
              <View style={style.texto}>
                <Text style={style.descripcion}>{item.Descripción}</Text>
              </View>
              <View style={style.foto}>
                <View style={style.contexto}>
                  <View style={style.linea} />
                  <View style={style.contenedoriconos}>
                    <View>
                      <ImageBackground
                        source={us}
                        style={style.icono}
                      ></ImageBackground>
                    </View>
                    <View style={style.textociencia}>
                      <Text style={style.des}>
                        DOCENTE : {item.Nombre} {item.Apellido}
                      </Text>
                    </View>
                  </View>
                  <View style={style.linea} />
                  <View style={style.contenedoriconos}>
                    <View style={style.temas}>
                      <TouchableOpacity
                        onPress={() => {
                          handleclick(item.idCurso);
                        }}
                      >
                        <View style={style.imagenes}>
                          <ImageBackground
                            source={material}
                            style={style.icon}
                          ></ImageBackground>
                        </View>
                        <View style={style.centrar}>
                          <Text style={style.rec}>MATERIAL</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={style.temas}>
                      <TouchableOpacity
                        onPress={() => {
                          mensajes(item.idCurso);
                        }}
                      >
                        <View style={style.imagenes}>
                          <ImageBackground
                            source={mensaje}
                            style={style.icn}
                          ></ImageBackground>
                        </View>
                        <View style={style.centrar}>
                          <Text style={style.rec}>
                            MENSAJES &nbsp;
                            <Text style={style.mensaje}>
                              {item.idCurso == 1
                                ? visual.length
                                : item.idCurso == 2
                                ? auditiva.length
                                : item.idCurso == 3
                                ? infantil.length
                                : item.idCurso == 4
                                ? atencion.length
                                : item.idCurso == 5
                                ? lenguaje.length
                                : item.idCurso == 6
                                ? habilidades.length
                                : item.idCurso == 7
                                ? matematico.length
                                : ""}
                            </Text>
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      );
    }
  }
  

  useEffect(() => {
    const visual = async (id) => {
      const { data } = await obtenerMensaje(id);
      const filter = data.filter((item) => {
        return item.Estado == 0;
      });
      setVisual(filter);
    };
    const auditiva = async (id) => {
      const { data } = await obtenerMensaje(id);
      const filter = data.filter((item) => {
        return item.Estado == 0;
      });
      setAuditiva(filter);
    };
    const infantil = async (id) => {
      const { data } = await obtenerMensaje(id);
      const filter = data.filter((item) => {
        return item.Estado == 0;
      });
      setInfantil(filter);
    };
    const atencion = async (id) => {
      const { data } = await obtenerMensaje(id);
      const filter = data.filter((item) => {
        return item.Estado == 0;
      });
      setAtencion(filter);
    };
    const lenguaje = async (id) => {
      const { data } = await obtenerMensaje(id);
      const filter = data.filter((item) => {
        return item.Estado == 0;
      });
      setLenguaje(filter);
    };
    const habilidades = async (id) => {
      const { data } = await obtenerMensaje(id);
      const filter = data.filter((item) => {
        return item.Estado == 0;
      });
      setHabilidades(filter);
    };
    const matematico = async (id) => {
      const { data } = await obtenerMensaje(id);
      const filter = data.filter((item) => {
        return item.Estado == 0;
      });
      setMatematico(filter);
    };
    visual(1);
    auditiva(2);
    infantil(3);
    atencion(4);
    lenguaje(5);
    habilidades(6);
    matematico(7);
  }, [obtenerMensaje]);

  return (
    <View>
      <View>{renderData(data, auth.idDocente)}</View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: "#f0f8ff",
    marginBottom: 15,
  },
  containerimages: {
    flexDirection: "row",
    alignSelf: "center",
  },
  //OTROS
  contenedor: {
    width: 380,
    height: 230,
    backgroundColor: "#f8f8ff",
    alignSelf: "center",
    borderWidth: 4,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderColor: "gold",
    marginTop: 15,
    shadowRadius: 5,
    elevation: 5,
  },
  icono: {
    width: 50,
    height: 50,
  },
  descripcion: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  },
  texto: {
    backgroundColor: "#191970",
    padding: 10,
  },
  foto: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 5,
  },
  imagenes: {
    flexDirection: "row",
  },
  icon: {
    height: 35,
    width: 35,
    marginLeft: 8,
  },
  icn: {
    height: 35,
    width: 35,
    marginLeft: 16,
  },
  contenedoicono: {
    alignSelf: "center",
  },
  rec: {
    fontSize: 10,
    color: "navy",
    fontWeight: "bold",
    marginTop: 8,
  },
  centrar: {
    alignSelf: "center",
  },
  contenedoriconos: {
    alignSelf: "center",
    flexDirection: "row",
  },
  temas: {
    margin: 5,
    borderWidth: 2,
    borderColor: "navy",
    padding: 8,
  },
  des: {
    color: "navy",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 11,
  },
  textociencia: {
    alignSelf: "center",
    margin: 10,
  },
  linea: {
    borderBottomColor: "#a7a7a7",
    borderBottomWidth: 1,
    margin: 5,
    width: 340,
  },
  mensaje: {
    color: "red",
    fontWeight: "bold",
  },
});

export default DataDocente;
