1. Register Page

Ստանալ Google-ով մուտք գործելու ֆունկցիոնալությունը
Մուտք գործելու ժամանակ աշխատելու է signin endpoint-ը որի ժամանակ սերվերից ստանում եք jwt secret key որը պետք է պահել cookie-ներում

Հետո get_user_data endpoint-ով ստանում ենք օգտվողի տվյալները և դրանք պահում global state-ում օրինակ Redux կարող եք օգտագործել Context 2 folder-ներնել առկա են համապատասխան ֆայլերով, ստանալուց հետո navigate եք անում դեպի Users page "/users"

ստորև ներկայացնում եմ help codes

  useEffect(() => {
    if (token) {
      const userHeaders = {
        Authorization: `Bearer ${token}`,
      };
      const userRequestOptions = {
        method: "GET",
        headers: userHeaders,
        redirect: "follow",
      };
      fetch("api/get_user_data", userRequestOptions)
        .then((resp) => resp.json())
        .then((res) => {
          setUser(res); պահպանել տվյալները global state-ում
          navigate("/users");
        })
        .catch((error) => console.error(error));
    }
  }, [token, setUser, navigate]);

  մնացած մասն արդեն Register.jsx-ում


  2․ Users Page

  Cookie-ներից jwt token-ի ստացում

    useEffect(() => {
    const savedToken = getCookie("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

    function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  Այնուհետև ստորև ներկայացված կոդի հիման վրա ստանալ բոլոր օգտվողների վերաբերյալ ինֆորմացիան և ցուցադրել User page-ում յուրաքանչյուրի համար կլինեն այսպես կոչված card-եր որոնց օրինակը կարող եք տեսնել static/images folder-ում

    useEffect(() => {
    if (token) {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch("api/get_all_users_data", requestOptions)
    }
  }, [token]);

  գրել նաև responsive css(media-query) որ ցանկացած device-ի համար հարմարվեն տվյալ card-երը, օրինակ․ շատ փոքր հեռախոսների համար դրանք լինեն 1 սյունով շատ մեծերի համար 3 սյունով

  3․ Header

  Հավաքել basic Header որտեղ կլինի Logo Users page-ի navigation-ը ինչպես նաև global state-ից ստանալ տվյալ պահին մուտք գործած օգտվողի նկարը որին սեղմելուց կբացվի փոքր dropdown որի առաջին տողում կլինի նրա անուն ազգանունը, իսկ 2րդ տողում նրա email-ը


  4. Global

  Ծանոթացեք ընդհանուր ստրուկտուրային folder-ների file-երի դասավորվածությանը, ուշադրություն դարձրեք jsconfig.json ֆայլին որը նախատեսված է import-ները հեշտ կազմակերպելու համար։
  Ուսումնասիրեք բոլոր կոդերը ընդհանուր գաղափար կազմեք և շուտով ձեզ կտրամադրվի նաև backend-ի հատվածը և api արդեն հասանելի կլինի, ձեր api կանչերի հետ կապված հատվածները ռեալիզացնելու համար։