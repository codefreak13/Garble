import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./src/components/Home/index";
import Email from "./src/components/Email-Verification";
import Email2 from "./src/components/Email-Verification2";
import Splash from "./src/components/Splash/Splash";
import Register from "./src/components/Register1/index";
import WasteDisposal from "./src/components/WasteDisposal/index";
import Modal from "./src/components/GotoDashBoard/index";
import Login from "./src/components/Login/index";
import AuthLoadingScreen from "./src/components/AuthLoadingScreen";
import HouseServiceForm from "./src/components/WasteDisposal/HouseServiceForm";
import OfficeServiceForm from "./src/components/WasteDisposal/OfficeServiceForm";
import IndustryServiceForm from "./src/components/WasteDisposal/IndustryServiceForm";
import MedicalServiceForm from "./src/components/WasteDisposal/MedicalServiceForm";
import CleaningServices from "./src/components/CleaningServices/index";
import CleaningServiceForm from "./src/components/CleaningServices/ServiceForm";
import Fumigation from "./src/components/Fumigation/index";
import FumigationServiceForm from "./src/components/Fumigation/ServiceForm";
import Recycle from "./src/components/Recycle/index";
import Sewage from "./src/components/Sewage/index";
import SewageServiceForm from "./src/components/Sewage/SewageEvacServiceForm";
import MobileToiletServiceForm from "./src/components/Sewage/MobileToiletServiceForm";
import RegisterRecycle from "./src/components/Recycle/RegisterRecycle";
import RecycleAgent from "./src/components/Recycle/RecycleAgent";
import NotVerifiedPage from "./src/components/Recycle/notVerified";
import MapView from "./src/components/Utils/Map";
import Settings from "./src/components/Settings";
import Profile from "./src/components/Profile";
import Terms from "./src/components/Terms";
import Privacy from "./src/components/Privacy";
import About from "./src/components/About";
import ServiceBar from "./src/components/ServiceBar";
import PaymentServiceForm from "./src/components/ServiceForm";
import SummaryCleaning from "./src/components/CleaningServices/SummaryCleaning";
import FumigateSummary from "./src/components/Fumigation/FumigateSummary";
import MobileToiletSummary from "./src/components/Sewage/MobileToiletSummary";
import Subscriptions from "./src/components/Subscriptions";
import SubscriptionDescription from "./src/components/SubscriptionDescription";
import PayStack from "./src/components/CleaningServices/PayStack";
import FumiPay from "./src/components/Fumigation/payment";
import SewageToiletPay from "./src/components/Sewage/ToiletPay";
import SewageEvacuationPay from "./src/components/Sewage/evacuationPay";
import WasteManagementPay from "./src/components/WasteDisposal/houseServicePay";
import WasteIndustrialPay from "./src/components/WasteDisposal/industryServicePay";
import WasteMedicalPay from "./src/components/WasteDisposal/medicalServicePay";
import WasteOfficePay from "./src/components/WasteDisposal/officeServicePay";
import CleaningSubscriptions from "./src/components/CleaningServices/CleaningSubscriptions";
import FumigationSubscription from "./src/components/Fumigation/FumigationSubscription";
import WasteSubscription from "./src/components/WasteDisposal/WasteSubscription";
import RegisterTerms from "./src/components/RegisterTerms";
import UpdateProfile from "./src/components/updateProfile";
import MobileToiletSubscriptions from "./src/components/Sewage/MobileToiletSubscriptions";
import EvacuationSubscriptions from "./src/components/Sewage/EvacuationSubscriptions";
import ResetPassword from "./src/components/ResetPassword";
import ForgotPassword from "./src/components/ForgotPassword";
import ActivityIndicatorPage from "./src/components/Utils/ActivityIndicator";
import DetailsCard from "./src/components/DetailsCard/DetailsCard";
import AuthSplash from "./src/components/Utils/AuthSplash";
import Reset from "./src/components/ForgotPasswordForm";
import Error from "./src/components/ErrorPage";

const AppNavigator = createStackNavigator(
  {
    Home,
    Email,
    Email2,
    Splash,
    CleaningServices,
    Register,
    WasteDisposal,
    Fumigation,
    Modal,
    Login,
    HouseServiceForm,
    IndustryServiceForm,
    MedicalServiceForm,
    OfficeServiceForm,
    CleaningServiceForm,
    FumigationServiceForm,
    SewageServiceForm,
    Recycle,
    RegisterRecycle,
    RecycleAgent,
    Sewage,
    MobileToiletServiceForm,
    MapView,
    Settings,
    Profile,
    Terms,
    Privacy,
    About,
    ServiceBar,
    PaymentServiceForm,
    SummaryCleaning,
    FumigateSummary,
    MobileToiletSummary,
    Subscriptions,
    SubscriptionDescription,
    PayStack,
    FumiPay,
    SewageToiletPay,
    SewageEvacuationPay,
    WasteManagementPay,
    WasteIndustrialPay,
    WasteMedicalPay,
    WasteOfficePay,
    NotVerifiedPage,
    CleaningSubscriptions,
    FumigationSubscription,
    WasteSubscription,
    RegisterTerms,
    UpdateProfile,
    MobileToiletSubscriptions,
    EvacuationSubscriptions,
    ResetPassword,
    ActivityIndicatorPage,
    DetailsCard,
    AuthSplash,
    ForgotPassword,
    Reset,
    Error
  },
  { initialRouteName: "Login" }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
// const AuthStack = createStackNavigator(
//   {
//     Email2,
//     Splash,
//     Login,
//     Register,
//   },
//   {
//     initialRouteName: 'Login',
//   },
// );

// export default createAppContainer(
//   createSwitchNavigator(
//     {
//       AuthLoading: AuthLoadingScreen,
//       App: AppNavigator,
//       Auth: AuthStack,
//     },
//     {
//       initialRouteName: 'AuthLoading',
//     },
//   ),
// );
