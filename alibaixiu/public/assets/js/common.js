$('#logout').on('click', function() {
    var isConfirm = confirm('确定要退出吗？');
    if (isConfirm) {
        $.ajax({
            type: 'post',
            url: '/logout',
            success: function() {
                location.href = 'login.html';
            },
            error: function() {
                alert('退出失败')
            }
        })
    }
});

$.ajax({
    type: 'get',
    url: '/users/' + userId,
    success: function(res) {
        // console.log(res);
        $('.avatar').attr('src', res.avatar)
        $('.profile .name').html(res.nickName)
    }
})