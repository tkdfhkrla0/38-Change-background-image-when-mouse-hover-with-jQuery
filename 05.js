$(function(){

    $('.navi li').mouseenter(function(){
        let changeImage = $(this).attr('data-image')
        $('.photo').css({
            'background-image': 'url(' + changeImage +')'
        })
        $('.navi li').mouseleave(function(){
            $('.photo').css({
                'background-image': ''
            })
        })
    })




    // $('.navi li').mouseenter(function(){
    //     let changeImage = $(this).attr('data-image')
    //     $('.photo').css({
    //         'background-image': 'url(' + changeImage + ')'
    //     })
    //     $('.navi li').mouseleave(function(){
    //         $('.photo').css({
    //             'background-image': ''
    //         })
    //     })
    // })    
})

// 성경이 삶의 모든 영역에서 권위있는 기준이 되는 것을 추구한다
// 분명한 복음을 통해 건강한 영혼들이 지속적으로 태어나는 것을 추구한다
// 세계선교를 통해 지상사명의 순종하는 것을 추구한다
// 성경적인 건전한 리더쉽이 세워지고 확립되는 것을 추구한다
// 동등한 공동체 리더쉽으로 사역하는 것을 추구한다
// 오순절주의 영성의 의합하지 않는 것을 추구한다
// 모든 성도들이 균형잡힌 성도로 성장하는 것을 추구한다

