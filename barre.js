//if (top != self) top.location.href = location.href;
var jolBarreDelay = 100;
var jolBarreTimerOuvrir = null;
var jolBarreTimerFermer = null;
function jolBarreOuvrirMenu(_v)
{
    if (_v)
    {
        jolBarreTimerOuvrir = setTimeout('jolBarreMontrerMenu()', jolBarreDelay);
    }
    else
    {
        if (jolBarreTimerOuvrir)
        {
            clearTimeout(jolBarreTimerOuvrir);
            jolBarreTimerOuvrir=null;
        }
    }
}
function jolBarreFermerMenu(_v)
{
    if (_v)
    {
        jolBarreTimerFermer = setTimeout('jolBarreCacherMenu()', jolBarreDelay);
    }
    else
    {
        if (jolBarreTimerFermer)
        {
            clearTimeout(jolBarreTimerFermer);
            jolBarreTimerFermer=null;
        }
    }
}
function jolBarreMontrerMenu()
{
    if (document.getElementById)
    {
        var style2 = document.getElementById('jolBarreNavigation').style;
        style2.display = 'block';
        var tdStyle = document.getElementById('jolBarreMenuTd').style;
        tdStyle.backgroundPosition = 'right bottom';
    }
}
function jolBarreCacherMenu()
{
    if (document.getElementById)
    {
        var style2 = document.getElementById('jolBarreNavigation').style;
        style2.display = 'none';
        var tdStyle = document.getElementById('jolBarreMenuTd').style;
        tdStyle.backgroundPosition = 'right top';
    }
}
function jolBarreToogleButton(o)
{
    var style = o.style;
    style.backgroundPosition = (style.backgroundPosition == 'right top') ? 'right bottom' : 'right top';
}
