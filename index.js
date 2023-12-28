let count = 0;

function increaseBtn()
{
    count++;
    document.getElementById('countLabel').innerHTML = count;
}

function decreaseBtn()
{
    count--;
    document.getElementById('countLabel').innerHTML = count;
}

function resetBtn()
{
    count = 0
    document.getElementById('countLabel').innerHTML = count;
}