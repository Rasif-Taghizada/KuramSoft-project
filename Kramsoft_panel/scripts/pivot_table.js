$(document).ready(function () {


    $(".pivot_table-sortable").sortable({
        connectWith: ".pivot_table-sortable",
        placeholder: "ui-state-highlight"
    });

    $(".pivot-table-view").click(function () {

        $(".table-view").toggle("blind");

    });

    //    $("#output").pivot(
    //       [
    //            { Adi: "Akif", Yasi: "12", ders: "Din", okul: "Marmara Üniversitesi" },
    //            { Adi: "Ümit", Yasi: "15", ders: "Din", okul: "İstanbul Teknik Üniversitesi" },
    //            { Adi: "Ahmet", Yasi: "12", ders: "Din", okul: "Boğaziçi Üniversitesi" },
    //            { Adi: "Ali", Yasi: "28", ders: "Kimya", okul: "Boğaziçi Üniversitesi" }
    //        ],
    //        {
    //            rows: ["Ders"],
    //            cols: ["Okul"]
    //        }
    //    );

    //    $("#output2").pivotUI(
    //         [
    //            { Adi: "Akif", Yasi: "12", ders: "Din", okul: "Marmara Üniversitesi" },
    //            { Adi: "Ümit", Yasi: "15", ders: "Din", okul: "İstanbul Teknik Üniversitesi" },
    //            { Adi: "Ahmet", Yasi: "12", ders: "Din", okul: "Boğaziçi Üniversitesi" },
    //            { Adi: "Ali", Yasi: "28", ders: "Kimya", okul: "Boğaziçi Üniversitesi" }
    //        ],
    //        {
    //            rows: ["Ders"],
    //            cols: ["Okul"]
    //        }
    //    );
});

