import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useGlobal } from "../context/GlobalProvider";
//INICIO-DE-SESION
import InicioSecionScreen from "../screens/Auth/inicioSesion/InicioSesionScreen";

//USUARIO
import RegisterScreen from "../screens/Auth/Usuario/registrarUsuario/RegisterScreen";

//PANTALLA-PRINCIPAL
import PrincipalScreen from "../screens/PantallaPrincipal/PrincipalScreen";

//FACE
import FaceScreen from "../screens/Face/FaceScreen";

//SECCION-APRENDIZAJE
import SeccionScreen from "../screens/Aprendizaje/SeccionScreen";

//VISUAL
//--SECCION PRINCIPAL VISUAL
import SeccScreen from "../screens/Aprendizaje/Visual/SeccScreen";

//TEMAS DE MATERIALES DE VISUALIZACIÓN
import SentidosScreen from "../screens/Aprendizaje/Visual/Extremidades/SentidosScreen";
import ExtremidadesScreen from "../screens/Aprendizaje/Visual/Extremidades/ExtremidadesScreen";
import PartesScreen from "../screens/Aprendizaje/Visual/Extremidades/PartesScreen";
import AnimalPrincipalScreen from "../screens/Aprendizaje/Visual/Animals/AnimalPrincipalScreen";
import DescripcionMod from "../screens/Aprendizaje/Visual/Extremidades/DescripcionMod";
import ArticulacionScreen from "../screens/Aprendizaje/Visual/Articulaciones/ArticulacionScreen";
import RostrosScreen from "../screens/Aprendizaje/Visual/Rostro/RostrosScreen";
import SaludScreen from "../screens/Aprendizaje/Visual/CuidadoCuerpo/SaludScreen";
import HuesosScreen from "../screens/Aprendizaje/Visual/Huesos/HuesosScreen";
import MusculosScreen from "../screens/Aprendizaje/Visual/Musculos/MusculosScreen";
import DigestivoScreen from "../screens/Aprendizaje/Visual/Sistemas/DigestivoScreen";
import RespiratorioScreen from "../screens/Aprendizaje/Visual/Sistemas/RespiratorioScreen";
import SeresScreen from "../screens/Aprendizaje/Visual/Etapas/SeresScreen";
import PlantasScreen from "../screens/Aprendizaje/Visual/Naturaleza/PlantasScreen";
import AnimalesScreen from "../screens/Aprendizaje/Visual/Animals/AnimalesScreen";
import TrilogiaScreen from "../screens/Aprendizaje/Visual/Naturaleza/TrilogiaScreen";
import ConceptoEspacialesScreen from "../screens/Aprendizaje/Visual/Espaciales/ConceptoEspacialesScreen";
import UtilesScreen from "../screens/Aprendizaje/Visual/Utencilios/UtilesScreen";
import InsectosScreen from "../screens/Aprendizaje/Visual/Animals/InsectosScreen";
import AlimentosScreen from "../screens/Aprendizaje/Visual/Alimentos/AlimentosScreen";
import FrutasScreen from "../screens/Aprendizaje/Visual/Alimentos/FrutasScreen";
import VerdurasScreen from "../screens/Aprendizaje/Visual/Alimentos/VerdurasScreen";
import EstacionesScreen from "../screens/Aprendizaje/Visual/Estaciones/EstacionesScreen";
import PeligrosoScreen from "../screens/Aprendizaje/Visual/Utencilios/PeligrosoScreen";
import SexoScreen from "../screens/Aprendizaje/Visual/Etapas/SexoScreen";
import DiaNocheScreen from "../screens/Aprendizaje/Visual/Estados/DiaNocheScreen";
import SaboresScreen from "../screens/Aprendizaje/Visual/Sabores/SaboresScreen";
import CuidadoScreen from "../screens/Aprendizaje/Visual/CuidadoCuerpo/CuidadoScreen";
import TemperaturaScreen from "../screens/Aprendizaje/Visual/Estados/TemperaturaScreen";
import UtilidadAnimalScreen from "../screens/Aprendizaje/Visual/Animals/UtilidadAnimalScreen";
import MonedasScreen from "../screens/Aprendizaje/Visual/Moneda/MonedasScreen";
import NumberScreen from "../screens/Aprendizaje/Visual/Numeros/NumberScreen";
import NumRomanosScreen from "../screens/Aprendizaje/Visual/Numeros/NumRomanosScreen";
import ColoresScreen from "../screens/Aprendizaje/Visual/Colores/ColoresScreen";
import FamiliaScreen from "../screens/Aprendizaje/Visual/Familia/FamiliaScreen";
import HabitacionesScreen from "../screens/Aprendizaje/Visual/Habitaciones/HabitacionesScreen";
import EscolaresScreen from "../screens/Aprendizaje/Visual/Utencilios/EscolaresScreen";
import MarScreen from "../screens/Aprendizaje/Visual/Regiones/MarScreen";
import SemaforoScreen from "../screens/Aprendizaje/Visual/Semaforo/SemaforoScreen";
import TransporteScreen from "../screens/Aprendizaje/Visual/MediosTransporte/TransporteScreen";
import MediosComScreen from "../screens/Aprendizaje/Visual/MedioComunicacion/MediosComScreen";
import NormasScreen from "../screens/Aprendizaje/Visual/NormasConvivencia/NormasScreen";
import OficiosScreen from "../screens/Aprendizaje/Visual/Oficios/OficiosScreen";
import SeguridadVialScreen from "../screens/Aprendizaje/Visual/SeguridadVial/SeguridadVialScreen";
import InstitucionesScreen from "../screens/Aprendizaje/Visual/Instituciones/InstitucionesScreen";
import MediosTransporteScreen from "../screens/Aprendizaje/Visual/MediosTransporte/MediosTransporteScreen";
import VerboScreen from "../screens/Aprendizaje/Visual/Sociales/VerboScreen";
import SustantivoScreen from "../screens/Aprendizaje/Visual/Sociales/SustantivoScreen";
import ValoresScreen from "../screens/Aprendizaje/Visual/Sociales/ValoresScreen";
import PalabrasMagicasScreen from "../screens/Aprendizaje/Visual/Sociales/PalabrasMagicasScreen";

//AUDITIVA
//--SECCION PRINCIPAL AUDITIVA
import SeccAuditiva from "../screens/Aprendizaje/Auditiva/SeccAuditiva";
//PSICOMOTRICIDAD
//--SECCION PRINCIPAL PSICOMOTROCIDAD
import PsicomotrocidadScreen from "../screens/Aprendizaje/Psicomotriz/PsicomotrocidadScreen";

//TRABAJO DE ATENCION
//--SECCION PRINCIPAL TRABAJO DE ATENCION
import AtencioScreen from "../screens/Aprendizaje/Atencion/AtencioScreen";

//TRABAJO DE LENGUAJE COMUNICACION
//--SECCION PRINCIPAL DE LENGUAJE - COMUNICACION
import LenguajeScreen from "../screens/Aprendizaje/Lenguaje/LenguajeScreen";
//TEMAS DE TRABAJO DE LENGUAJE
import AbecedarioScreen from "../screens/Aprendizaje/Lenguaje/Abecedario/AbecedarioScreen";
import VocalesScreen from "../screens/Aprendizaje/Lenguaje/Vocales/VocalesScreen";
import OnomatopeyaScreen from "../screens/Aprendizaje/Lenguaje/Onomatopeyas/OnomatopeyaScreen";

//HABILIDADES SOCIALES
//--SECCION PRINCIPAL HABILIDADES SOCIALES
import HabilidadesSocialesScreen from "../screens/Aprendizaje/Sociales/HabilidadesSocialesScreen";

//LOGICO-MATEMÁTICO
//--SECCION PRINCIPAL LOGICO-MATEMÁTICO
import MatematicoScreen from "../screens/Aprendizaje/Matematico/MatematicoScreen";

//MENSAJE
import MensajeScreen from "../screens/Mensaje/MensaggeScreen";

//ASISTENCIA
import AsistenciaScreen from "../screens/Asistencia/AsistenciaScreen";

const Tab = createBottomTabNavigator();

const Navegation = () => {
  const { auth } = useGlobal();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Principal"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Principal") {
              return (
                <Ionicons
                  name={focused ? "md-home" : "md-home-outline"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Ánimo") {
              return (
                <Ionicons
                  name={focused ? "md-happy" : "md-happy-outline"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Aprendizaje") {
              return (
                <Ionicons
                  name={focused ? "md-man" : "md-man-outline"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Login") {
              return (
                <Ionicons
                  name={
                    focused ? "md-person-circle" : "md-person-circle-outline"
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Registrar") {
              return (
                <Ionicons
                  name={
                    focused ? "md-person-circle" : "md-person-circle-outline"
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Asistencia") {
              return (
                <Ionicons
                  name={
                    focused ? "md-person-circle" : "md-person-circle-outline"
                  }
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
      >
        {auth != null ? (
          <>
            <Tab.Screen
              name="Principal"
              component={PrincipalScreen}
              options={{
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="Ánimo"
              component={FaceScreen}
              options={{
                headerShown: false,
              }}
            />
            {auth.IdRol == 5 && (
              <Tab.Screen
                name="Asistencia"
                component={AsistenciaScreen}
                options={{
                  headerShown: false,
                }}
              />
            )}
            <Tab.Screen
              name="cuerpo"
              component={SentidosScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="Numero"
              component={NumberScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="Enteros"
              component={NumRomanosScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="Vocales"
              component={VocalesScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="LetraA"
              component={AbecedarioScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="Extremidades"
              component={ExtremidadesScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="Matematico"
              component={MatematicoScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="Partes"
              component={PartesScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="Animales"
              component={AnimalPrincipalScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="Aprendizaje"
              component={SeccionScreen}
              options={{
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="DescripcionMod"
              component={DescripcionMod}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="Color"
              component={ColoresScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="visual"
              component={SeccScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="articulacion"
              component={ArticulacionScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="Cara"
              component={RostrosScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="Salud"
              component={SaludScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="parteshuesos"
              component={HuesosScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="musculos"
              component={MusculosScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="digestivo"
              component={DigestivoScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="respiratorio"
              component={RespiratorioScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="seres"
              component={SeresScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="plantas"
              component={PlantasScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="animales"
              component={AnimalesScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="ambiente"
              component={TrilogiaScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="Auditiva"
              component={SeccAuditiva}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="adelante"
              component={ConceptoEspacialesScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="moneda"
              component={MonedasScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="Atencion"
              component={AtencioScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="Onomatopeya"
              component={OnomatopeyaScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="Psicomotrocidad"
              component={PsicomotrocidadScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="Normas"
              component={NormasScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="family"
              component={FamiliaScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="mar"
              component={MarScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="semaforo"
              component={SemaforoScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="transporte"
              component={TransporteScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="comunicacion"
              component={MediosComScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="Lenguaje"
              component={LenguajeScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="utiles"
              component={UtilesScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="insectos"
              component={InsectosScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="alimentos"
              component={AlimentosScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="frutas"
              component={FrutasScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="verduras"
              component={VerdurasScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="estaciones"
              component={EstacionesScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="peligroso"
              component={PeligrosoScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="niño"
              component={SexoScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="dia"
              component={DiaNocheScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="sabores"
              component={SaboresScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="Habilidades"
              component={HabilidadesSocialesScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="mensaje"
              component={MensajeScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="cuidado"
              component={CuidadoScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="temperatura"
              component={TemperaturaScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="utilidadanimal"
              component={UtilidadAnimalScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="habitaciones"
              component={HabitacionesScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="oficios"
              component={OficiosScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="seguridad"
              component={SeguridadVialScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="escolares"
              component={EscolaresScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="instituciones"
              component={InstitucionesScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="MediosTransporteScreen"
              component={MediosTransporteScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="verbo"
              component={VerboScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="sustantivo"
              component={SustantivoScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="valores"
              component={ValoresScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
            <Tab.Screen
              name="magicas"
              component={PalabrasMagicasScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
          </>
        ) : (
          <>
            <Tab.Screen
              name="Login"
              component={InicioSecionScreen}
              options={{
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="Register"
              component={RegisterScreen}
              options={{
                headerShown: false,
                tabBarItemStyle: { display: "none" },
              }}
            />
          </>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navegation;
