var getParties = function () {

    var likud = new party('הליכוד בהנהגת בנימין נתניהו לראשות הממשלה', 790994);
    var yashar = new party('ישר! עם איזנקוט לראשות הממשלה מאחדים את ישראל', 606897);
    var joint = new party('הרשימה המשותפת', 344133);
    var together = new party('ביחד בראשות נפתלי בנט', 334776);
    var utj = new party('יהדות התורה והשבת אגודת ישראל - דגל התורה', 225949);
    var beytenu = new party('ישראל ביתנו בראשות אביגדור ליברמן', 225073);
    var democrats = new party('הדמוקרטים בראשות יאיר גולן', 243064);
    var otzma = new party('עוצמה יהודית בראשות איתמר בן גביר', 210692);
    var shas = new party('התאחדות הספרדים שומרי תורה תנועתו של מרן הרב עובדיה יוסף זצ"ל', 207694);
    var zionism = new party('הציונות הדתית בראשות בצלאל סמוטריץ\' וזהות בראשות משה פייגלין', 187330);
    var raam = new party('רע"ם - הרשימה הערבית המאוחדת', 180982);
    var reservists = new party('המילואימניקים והכלכלית בראשות יועז הנדל וירון זליכה', 100081);
    var amcha = new party('עמך ישראל בראשות עופר וינטר', 62394);
    var haredi = new party('הציבור החרדי בראשות מוטי ליטנר', 8059);
    var noam = new party('נעם לישראל למען עתיד הילדים בראשות אבי מעוז', 6052);
    var black = new party('צבע שחור - מגן עולם התורה', 7582);
    var tzomet = new party('צומת בית ישראל', 4009);
    var partnership = new party('השותפות לכולם', 2784);
    var chain = new party('שרשר לאהבה ואחדות העם', 1348);
    var succeed = new party('מפלגת ביחד נצליח - רשימה משותפת ערבית יהודית בראשות אבי שקד', 939);
    var first = new party('ישראל תחילה בראשות שרן השכל', 688);
    var reform = new party('התיקון לשיטת הבחירות והממשל', 652);
    var kahal = new party('הקהל - מפלגה כלל חרדית שנציגיה נבחרים על ידי הציבור בראשות הרב שלמה אלבוים', 676);
    var pirates = new party('הפיראטים - צפים לטוב', 610);
    var order = new party('סדר-חדש לכינון חוקה, להפרדת רשויות ובחירות אישיות', 615);
    var people = new party('אני ואתה מפלגת העם הישראלית', 531);
    var dawn = new party('אורות השחר בראשות ניסים לוק', 489);
    var justice = new party('משפט צדק', 473);
    var women = new party('קול הנשים', 462);
    var paradise = new party('גן עדן בראשות ישוע ישראל בן דוד', 792);
    var revival = new party('תקומה', 377);
    var welfare = new party('בטח - בטחון חברתי בראשות סמיון גרפמן', 309);
    var listen = new party('שמע בראשות נפתלי גולדמן', 331);
    var bible = new party('גה"ת - גוש התנ"כי', 260);
    var security = new party('ביטחון אישי', 282);
    var covenant = new party('ברית עולם לגאולת ישראל', 168);
    var brother = new party('תנועת אחי תנועתו של הרב יורם אברג\'ל זצ"ל', 30);
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
