var getParties = function () {

    var likud = new party('הליכוד בהנהגת בנימין נתניהו לראשות הממשלה', 732001);
    var yashar = new party('ישר! עם איזנקוט לראשות הממשלה מאחדים את ישראל', 554397);
    var joint = new party('הרשימה המשותפת', 322878);
    var together = new party('ביחד בראשות נפתלי בנט', 300887);
    var utj = new party('יהדות התורה והשבת אגודת ישראל - דגל התורה', 216021);
    var beytenu = new party('ישראל ביתנו בראשות אביגדור ליברמן', 209101);
    var democrats = new party('הדמוקרטים בראשות יאיר גולן', 225455);
    var otzma = new party('עוצמה יהודית בראשות איתמר בן גביר', 193414);
    var shas = new party('התאחדות הספרדים שומרי תורה תנועתו של מרן הרב עובדיה יוסף זצ"ל', 194069);
    var zionism = new party('הציונות הדתית בראשות בצלאל סמוטריץ\' וזהות בראשות משה פייגלין', 165003);
    var raam = new party('רע"ם - הרשימה הערבית המאוחדת', 116926);
    var reservists = new party('המילואימניקים והכלכלית בראשות יועז הנדל וירון זליכה', 91130);
    var amcha = new party('עמך ישראל בראשות עופר וינטר', 56045);
    var haredi = new party('הציבור החרדי בראשות מוטי ליטנר', 7570);
    var noam = new party('נעם לישראל למען עתיד הילדים בראשות אבי מעוז', 5752);
    var black = new party('צבע שחור - מגן עולם התורה', 7299);
    var tzomet = new party('צומת בית ישראל', 3721);
    var partnership = new party('השותפות לכולם', 2541);
    var chain = new party('שרשר לאהבה ואחדות העם', 1231);
    var succeed = new party('מפלגת ביחד נצליח - רשימה משותפת ערבית יהודית בראשות אבי שקד', 864);
    var first = new party('ישראל תחילה בראשות שרן השכל', 636);
    var reform = new party('התיקון לשיטת הבחירות והממשל', 619);
    var kahal = new party('הקהל - מפלגה כלל חרדית שנציגיה נבחרים על ידי הציבור בראשות הרב שלמה אלבוים', 622);
    var pirates = new party('הפיראטים - צפים לטוב', 512);
    var order = new party('סדר-חדש לכינון חוקה, להפרדת רשויות ובחירות אישיות', 526);
    var people = new party('אני ואתה מפלגת העם הישראלית', 486);
    var dawn = new party('אורות השחר בראשות ניסים לוק', 442);
    var justice = new party('משפט צדק', 412);
    var women = new party('קול הנשים', 409);
    var paradise = new party('גן עדן בראשות ישוע ישראל בן דוד', 778);
    var revival = new party('תקומה', 334);
    var welfare = new party('בטח - בטחון חברתי בראשות סמיון גרפמן', 284);
    var listen = new party('שמע בראשות נפתלי גולדמן', 291);
    var bible = new party('גה"ת - גוש התנ"כי', 224);
    var security = new party('ביטחון אישי', 254);
    var covenant = new party('ברית עולם לגאולת ישראל', 154);
    var brother = new party('תנועת אחי תנועתו של הרב יורם אברג\'ל זצ"ל', 28);
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

    likud.group = 'ימין';
    utj.group = 'ימין';
    otzma.group = 'ימין';
    shas.group = 'ימין';
    zionism.group = 'ימין';
    yashar.group = 'שמאל';
    together.group = 'שמאל';
    beytenu.group = 'שמאל';
    democrats.group = 'שמאל';
    joint.group = 'ערבים';
    raam.group = 'ערבים';

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
