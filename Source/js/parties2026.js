var getParties = function () {

    var likud = new party('הליכוד בהנהגת בנימין נתניהו לראשות הממשלה', 607519);
    var yashar = new party('ישר! עם איזנקוט לראשות הממשלה מאחדים את ישראל', 490877);
    var joint = new party('הרשימה המשותפת', 262714);
    var together = new party('ביחד בראשות נפתלי בנט', 264631);
    var utj = new party('יהדות התורה והשבת אגודת ישראל - דגל התורה', 200220);
    var beytenu = new party('ישראל ביתנו בראשות אביגדור ליברמן', 178743);
    var democrats = new party('הדמוקרטים בראשות יאיר גולן', 202124);
    var otzma = new party('עוצמה יהודית בראשות איתמר בן גביר', 158164);
    var shas = new party('התאחדות הספרדים שומרי תורה תנועתו של מרן הרב עובדיה יוסף זצ"ל', 168103);
    var zionism = new party('הציונות הדתית בראשות בצלאל סמוטריץ\' וזהות בראשות משה פייגלין', 144046);
    var raam = new party('רע"ם - הרשימה הערבית המאוחדת', 102825);
    var reservists = new party('המילואימניקים והכלכלית בראשות יועז הנדל וירון זליכה', 77560);
    var amcha = new party('עמך ישראל בראשות עופר וינטר', 48553);
    var haredi = new party('הציבור החרדי בראשות מוטי ליטנר', 6998);
    var noam = new party('נעם לישראל למען עתיד הילדים בראשות אבי מעוז', 4815);
    var black = new party('צבע שחור - מגן עולם התורה', 7024);
    var tzomet = new party('צומת בית ישראל', 2967);
    var partnership = new party('השותפות לכולם', 2153);
    var chain = new party('שרשר לאהבה ואחדות העם', 1045);
    var succeed = new party('מפלגת ביחד נצליח - רשימה משותפת ערבית יהודית בראשות אבי שקד', 718);
    var first = new party('ישראל תחילה בראשות שרן השכל', 572);
    var reform = new party('התיקון לשיטת הבחירות והממשל', 542);
    var kahal = new party('הקהל - מפלגה כלל חרדית שנציגיה נבחרים על ידי הציבור בראשות הרב שלמה אלבוים', 518);
    var pirates = new party('הפיראטים - צפים לטוב', 436);
    var order = new party('סדר-חדש לכינון חוקה, להפרדת רשויות ובחירות אישיות', 439);
    var people = new party('אני ואתה מפלגת העם הישראלית', 407);
    var dawn = new party('אורות השחר בראשות ניסים לוק', 369);
    var justice = new party('משפט צדק', 353);
    var women = new party('קול הנשים', 348);
    var paradise = new party('גן עדן בראשות ישוע ישראל בן דוד', 269);
    var revival = new party('תקומה', 262);
    var welfare = new party('בטח - בטחון חברתי בראשות סמיון גרפמן', 234);
    var listen = new party('שמע בראשות נפתלי גולדמן', 239);
    var bible = new party('גה"ת - גוש התנ"כי', 202);
    var security = new party('ביטחון אישי', 212);
    var covenant = new party('ברית עולם לגאולת ישראל', 126);
    var brother = new party('תנועת אחי תנועתו של הרב יורם אברג\'ל זצ"ל', 24);
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
