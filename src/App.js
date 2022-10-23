import logo from './logo.svg';
import './App.css';
import { config } from './config';
import { PublicClientApplication } from '@azure/msal-browser';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isAuthenticated: false,
      user: ()
    };
    this.login = this.login.bind(this)
    // Initialize the MSAL application object
    this.PublicClientApplication = new PublicClientApplication({
      auth: {
        clientId: config.appid,
        redirectUri: config.redirectUrl,
        authority:config.authority
      },
      cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: true
      }
    });
  }
  async login(){
    try {
      // Login via popup
      await this.PublicClientApplication.loginPopup(
        {
          scopes: config.scopes,
          prompt: "select_account"
        }
      )
    }
  }

export default App;
