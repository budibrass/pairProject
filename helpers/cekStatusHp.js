function cekStatusHp(value)
{
    if(value > 7000000)
    {
        return `HP Sultan`
    }
    else
    {
        return `HP Merakyat`
    }
}

module.exports = cekStatusHp;
