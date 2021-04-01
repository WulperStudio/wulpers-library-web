import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      height: 575,
      width: "100%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      position: "relative",
      "& button": {
        textTransform: "none",
      },
    },
    backgroundContaniner: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: 575,
      overflow: "hidden",
    },
    backgroundImage: {
      width: "auto",
      height: "auto",
      verticalAlign: "top",
      minWidth: "100%",
      minHeight: "100%",
      position: "absolute",
      zIndex: 1,
    },
    navBar: {
      paddingTop: 20,
      display: "flex",
      justifyContent: "space-between",
      zIndex: 2,
    },
    buttonsContainer: {
      marginTop: 10,
      "& a, & button": {
        marginLeft: 25,
      },
      "& a": {
        color: "white",
        textDecoration: "none",
        fontWeight: 500,
      },
    },
    contentHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      height: "100%",
      zIndex: 2,
    },
    whatsapp: {
      zIndex: 3,
      background: "#54D3AD",
      position: "absolute",
      bottom: -24,
      right: 24,
    },
    style1: {
      background: "#FFF",
      width: "100%",
      height: "7%",
      position: "absolute",
      bottom: 0,
      left: 0,
      zIndex: 2,
      clipPath: "polygon(0 0, 0% 100%, 100% 100%);",
    },

    title: {
      fontWeight: 600,
      fontSize: 45,
      margin: 0,
      color: "#FFF",
      textAlign: "center",
    },
    container: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      position: "relative",
    },

    paper: {
      boxShadow: "0px 8px 20px 0px rgba(224, 224, 224, 0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      height: 190,
      "& h3": {
        fontWeight: "500",
        marginTop: 20,
      },
    },
    papersTitle: {
      textAlign: "center",
      fontSize: 35,
    },

    sectionVideo: {
      clipPath: "polygon(0 0, 100% 13%, 100% 100%, 0 87%)",
    },

    sectionImageLeft: {
      background:
        "url('https://previews.dropbox.com/p/thumb/ABFJyVifqHe-w1FNk4TPGS22SqarTpB-T6VZ4ej4Bu6u8zfDDCPTjjoozotY-N3K6X7yDgv0XfXL1l5k9RnDUUfO8u_1SonD7678YWPFtywEPwUeT94heN9GieLhvzxmvi8UJ7lVRYG9JL2ExiRuYMYSgcRsu7kvrQLyDjnXkXMfsrcvKmfbQ172KTaunu9A2ZzeuVcHu0bHt3yxBXQq1-JvTFVVKdUQXCSTWVVqP8dZCOL37fLgEuq80R1S_U9Ut_mkKzqBvMVSjATnbpyKeTGfG2sLBb3842zoxTP-w-1mmKCHXEFo5bP_AHWj09SmwhC5c38ZCLjJtdiUZfi_Ke6GG2UrQ0jBORK8qMvCr3qcOQ/p.png') no-repeat left top",
      height: 734,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    sectionImageRigth: {
      background:
        "url('https://previews.dropbox.com/p/thumb/ABG1DK6O-3_BxaJhPt7uf_wlJ-jodkab-RBEhMI5grTXFRUWCD8RIbzHMqrF8VjehO1mPD5kdNYCyHDg-2WSMxcoq4GRhqPfA1vn4YQn44KTsiaLGrxFLlgcDdSDpSSmEgwxHZSV5BZXyqO1DzON0trzB7uKSYSQcyypgj1iXBRyDodnupHDeXTqlU2lOaVwfJ_JLQvC-kfjr8BI7WSTn-kJv30hJfT53YBpqkHLNdgAMiHzFW32hTtjJ4R2dvWk2AJtCJlqH-oumpK15bgat9Xv7XFkWYF2LVF7b23tY7MFVZ8lgPsJCqFy_OiKPOBMf4AtbSI8pr45RofRJyIrqaCA25PwcFHVRZfo9BwGSCPcPw/p.png') no-repeat right top",
      height: 734,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    list: {
      padding: 0,
      "& li": {
        background:
          "url('https://uc8de12ad7cc2052b7457792ac05.previews.dropboxusercontent.com/p/orig/ABEIW36P3rbImKOqjgt54YG1eRtwyDBygLueXXc10_4nd4Gkcfs4kz6kvSgSVsnehs4lzgJ8wzUDxKkZm5K_Qsi7hH7SzYflWNvGPNhPFWU6AKk9pCWk8_WFDdQfIoG9Lw1xKOrWxpwNvx-gox5Tm8lr0KiqFnirj5QOIRhGPULIZE5C4w_J4cHfWQDkW1-pmeot8nvDJYwDIWPUzjG4Hzk1jrmyZw3py8aZBAY0SEKJluUydCl1wCPZ8Xzx0WW7GhaYrLxTdFZgekRjz-BsEROU9d3ruMNo0GSWcV7Wd3lEZnYjdXBmC_b23sjHiWP-F-QgqVwgxAfPoudpcJGM8MH2ykELhYnE9-NlEScsu9Cf1FneGWXtlA3jQMNkS03apfU/p.svg') no-repeat left center",
        padding: "12px 0px 12px 35px",
        listStyle: "none",
        margin: 0,
      },
    },
  })
)
export default useStyles
