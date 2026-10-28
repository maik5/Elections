var getParties = function () {

    var likud = new party('הליכוד בהנהגת בנימין נתניהו לראשות הממשלה', 460565);
    var yashar = new party('ישר! עם איזנקוט לראשות הממשלה מאחדים את ישראל', 333786);
    var joint = new party('הרשימה המשותפת', 195808);
    var together = new party('ביחד בראשות נפתלי בנט', 177904);
    var utj = new party('יהדות התורה והשבת אגודת ישראל - דגל התורה', 136365);
    var beytenu = new party('ישראל ביתנו בראשות אביגדור ליברמן', 133186);
    var democrats = new party('הדמוקרטים בראשות יאיר גולן', 125030);
    var otzma = new party('עוצמה יהודית בראשות איתמר בן גביר', 124001);
    var shas = new party('התאחדות הספרדים שומרי תורה תנועתו של מרן הרב עובדיה יוסף זצ"ל', 120402);
    var zionism = new party('הציונות הדתית בראשות בצלאל סמוטריץ\' וזהות בראשות משה פייגלין', 116836);
    var raam = new party('רע"ם - הרשימה הערבית המאוחדת', 80894);
    var reservists = new party('המילואימניקים והכלכלית בראשות יועז הנדל וירון זליכה', 57666);
    var amcha = new party('עמך ישראל בראשות עופר וינטר', 37472);
    var haredi = new party('הציבור החרדי בראשות מוטי ליטנר', 5436);
    var noam = new party('נעם לישראל למען עתיד הילדים בראשות אבי מעוז', 4057);
    var black = new party('צבע שחור - מגן עולם התורה', 3777);
    var tzomet = new party('צומת בית ישראל', 2499);
    var partnership = new party('השותפות לכולם', 1573);
    var chain = new party('שרשר לאהבה ואחדות העם', 757);
    var succeed = new party('מפלגת ביחד נצליח - רשימה משותפת ערבית יהודית בראשות אבי שקד', 530);
    var first = new party('ישראל תחילה בראשות שרן השכל', 474);
    var reform = new party('התיקון לשיטת הבחירות והממשל', 447);
    var kahal = new party('הקהל - מפלגה כלל חרדית שנציגיה נבחרים על ידי הציבור בראשות הרב שלמה אלבוים', 424);
    var pirates = new party('הפיראטים - צפים לטוב', 329);
    var order = new party('סדר-חדש לכינון חוקה, להפרדת רשויות ובחירות אישיות', 317);
    var people = new party('אני ואתה מפלגת העם הישראלית', 314);
    var dawn = new party('אורות השחר בראשות ניסים לוק', 275);
    var justice = new party('משפט צדק', 271);
    var women = new party('קול הנשים', 251);
    var paradise = new party('גן עדן בראשות ישוע ישראל בן דוד', 227);
    var revival = new party('תקומה', 195);
    var welfare = new party('בטח - בטחון חברתי בראשות סמיון גרפמן', 177);
    var listen = new party('שמע בראשות נפתלי גולדמן', 169);
    var bible = new party('גה"ת - גוש התנ"כי', 163);
    var security = new party('ביטחון אישי', 155);
    var covenant = new party('ברית עולם לגאולת ישראל', 93);
    var brother = new party('תנועת אחי תנועתו של הרב יורם אברג\'ל זצ"ל', 18);
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
