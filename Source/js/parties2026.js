var getParties = function () {

    var likud = new party('הליכוד בהנהגת בנימין נתניהו לראשות הממשלה', 571627);
    var yashar = new party('ישר! עם איזנקוט לראשות הממשלה מאחדים את ישראל', 468460);
    var joint = new party('הרשימה המשותפת', 233963);
    var together = new party('ביחד בראשות נפתלי בנט', 252883);
    var utj = new party('יהדות התורה והשבת אגודת ישראל - דגל התורה', 176599);
    var beytenu = new party('ישראל ביתנו בראשות אביגדור ליברמן', 169988);
    var democrats = new party('הדמוקרטים בראשות יאיר גולן', 194528);
    var otzma = new party('עוצמה יהודית בראשות איתמר בן גביר', 148508);
    var shas = new party('התאחדות הספרדים שומרי תורה תנועתו של מרן הרב עובדיה יוסף זצ"ל', 153764);
    var zionism = new party('הציונות הדתית בראשות בצלאל סמוטריץ\' וזהות בראשות משה פייגלין', 135032);
    var raam = new party('רע"ם - הרשימה הערבית המאוחדת', 93655);
    var reservists = new party('המילואימניקים והכלכלית בראשות יועז הנדל וירון זליכה', 73171);
    var amcha = new party('עמך ישראל בראשות עופר וינטר', 45924);
    var haredi = new party('הציבור החרדי בראשות מוטי ליטנר', 6465);
    var noam = new party('נעם לישראל למען עתיד הילדים בראשות אבי מעוז', 4450);
    var black = new party('צבע שחור - מגן עולם התורה', 5682);
    var tzomet = new party('צומת בית ישראל', 2819);
    var partnership = new party('השותפות לכולם', 2014);
    var chain = new party('שרשר לאהבה ואחדות העם', 952);
    var succeed = new party('מפלגת ביחד נצליח - רשימה משותפת ערבית יהודית בראשות אבי שקד', 669);
    var first = new party('ישראל תחילה בראשות שרן השכל', 548);
    var reform = new party('התיקון לשיטת הבחירות והממשל', 513);
    var kahal = new party('הקהל - מפלגה כלל חרדית שנציגיה נבחרים על ידי הציבור בראשות הרב שלמה אלבוים', 503);
    var pirates = new party('הפיראטים - צפים לטוב', 408);
    var order = new party('סדר-חדש לכינון חוקה, להפרדת רשויות ובחירות אישיות', 406);
    var people = new party('אני ואתה מפלגת העם הישראלית', 391);
    var dawn = new party('אורות השחר בראשות ניסים לוק', 339);
    var justice = new party('משפט צדק', 331);
    var women = new party('קול הנשים', 325);
    var paradise = new party('גן עדן בראשות ישוע ישראל בן דוד', 258);
    var revival = new party('תקומה', 241);
    var welfare = new party('בטח - בטחון חברתי בראשות סמיון גרפמן', 221);
    var listen = new party('שמע בראשות נפתלי גולדמן', 228);
    var bible = new party('גה"ת - גוש התנ"כי', 192);
    var security = new party('ביטחון אישי', 193);
    var covenant = new party('ברית עולם לגאולת ישראל', 123);
    var brother = new party('תנועת אחי תנועתו של הרב יורם אברג\'ל זצ"ל', 21);
    var bluewhite = new party('כחול לבן בראשות בני גנץ', 3);

    var parties = [
        likud,
        yashar,
        joint,
        together,
        utj,
        beytenu,
        democrats,
        otzma,
        shas,
        zionism,
        raam,
        reservists,
        amcha,
        haredi,
        noam,
        black,
        tzomet,
        partnership,
        chain,
        succeed,
        first,
        reform,
        kahal,
        pirates,
        order,
        people,
        dawn,
        justice,
        women,
        paradise,
        revival,
        welfare,
        listen,
        bible,
        security,
        covenant,
        brother,
        bluewhite,
    ];

    var partyConnections = [
        new partyConnection(together, beytenu),
        new partyConnection(joint, raam),
        new partyConnection(zionism, likud),
        new partyConnection(utj, shas),
        new partyConnection(democrats, yashar),
        new partyConnection(covenant, reform),
    ];

    return {parties: parties, partyConnections: partyConnections};
};

var percent = 0.0325;
