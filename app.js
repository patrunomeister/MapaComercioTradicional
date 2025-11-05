// Dati di esempio dei punti di interesse 
// In una applicazione reale, questi dati verrebbero caricati da un'API
const locations = [
    {
        id: 1,
        title: "Wamba Fotografía",
        type: "Tiendas históricas",
        description: "<iframe width=\"120\" src=\"https://www.youtube.com/embed/bhHnQH2JHow?si=1tS5hqdPzvshAAhG\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe><a href='https://youtu.be/bhHnQH2J'>https://youtu.be/bhHnQH2J</a><br><br> El atelier de fotografía Wamba, a lo largo de los últimos 60 años, ha estado un testigo directo del devenir histórico de Castellón. Vicente Traver, Wamba, heredero de un magisterio impulsado por su padre, ha trasladado su atelier en Calle San Vicent 40. En su  actual tienda se pueden mirar imagines que para 60 años han inmortalizado la vida social de Castellón y cuentas y anécdotas  por la voz de Vicente<br>",
        coordinates: [-0.037432, 39.984495],
        details: {
            address: "",
            category: "",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "❤️",
        images: [
            "https://lh3.googleusercontent.com/umsh/AN6v0v4NayY3PWdlGppWF6RRuDzlQO55YJmXES9q9Hkf705UxFh4Tqca0yMvw63tP6ZjHqzCsIQ-4sLVBpPOOFu10NGQgkr5tylrZ_dMJkF1FiW4D58sq4DoqYKBPXpyFc2r3eEBrWfioALS6YxUckIQSpFzVUoTG9vbcqXVt-aUOcU6UJNHS5M6qSbTV5FbviCUqiCqHJ6vGMAkSBKu85SM3IDy5_f8ge78IBlCnJFEQ-QigjmCeVlRmTxNx5kPEvw4xYK4wX0jnQXHbaGbwtqtCELdwXqJGPk0uA5_L9c7KtYyHNytVWZnGPMJwbeV5A8A7G0Vpiz5dzLd4sNZRJ2iFxXZTGNWykuFrEIjG790YiGValMsWZrzHJRuG9WuCyte3qj9L-1JDQeIOnrMXBvO3zXLYwj5XlmBUEoqpsX8qjtmcy9cktxQZF59lxksKaU6u2J98pYJj07i5mDqh6VhX_OmqMRghPMFnZdOEq0hn4o8k9XuIVaQc8NeyqURODmZbGDnoF5f8dfUDyX67ajDHvP3vksaoZmzdnsoXGq9zCFlsGzeZq15_6TZJcaKDWyZ6aZqXZut4zKJgC26p_C8f82SKon-Qe7k-C8M1nN8krYXlqEZTaSnKNqRk5PoClhxorWSbRh6OnJGaPCxDiGENKVbOO8AuZBmHlW27ZrQ3qjATo1XvMAf-DNGZ1sQcy8ZEHt3sxtoNLvBoOjKRHlWu9FOEmT7Sw=s16383",
            "https://lh3.googleusercontent.com/umsh/AN6v0v6qZk4teQfEW4XI3Iwv5l40O04Og9Ov739O5ulfeU6pehjSOJ5Bh9cSI07r38GhNwRzz8g3nRGpPp7XC7mxgeBNp4_42ezhXLfIyHVM4RO10MrsgU2Njtfj6cstSCr9i1kczo9QpYEo6fC7fA0hIJYdGRAE6W3MB4h44OZ8QujB4ayHQehsLhfJ5Uqe7F42JBG6X9YlHXpc2zo6EKiVwAJcHP37BgJnzxx53e0Xo59eYdVKE-tVqY3vrnO2hbg5FiV-aRD3yexLj1s11MYUehdT0_SiOy5CfOMz_Jtc_DUMmCk2qzOhVwv5v_gTCkTW77AqjNco2069hZ6QovkCRPCJkTWOU6YDdtfcZj0sZbLGJSVMRL9u96cR1YkeMR9Xv3lfmVJmi7JPIVQntj9N6c4eMH6XmyXCxHOoQNfUGhDSvNuNAMWrOBnp6AOMJtc41GVuDnlnlP8BtodytFJiTv1lUrZBi71meVkbSmNP6yVDp64LPSseQfAUhGyeTJPq68xHXuPSlR6dbV7PllnVIuESnLgvycCFIqZKVQ_Fs_aOqFXidlFmrOjr-7HqXBshmrXENDTVQxfqmvLwjk_ecyfoGlLr5jmJhRWKigBKEvOWCVDZakx4Zl1FQD6IPDripq8jS-fLNTana7PmpnQC0TroAFfsos9Gh0HKSEZWsPOwzqKvlO5oH-yKwq6rFFQTW1meL2r9h8lSj1jU1JibxtNTPw95Lw=s16383"
        ]
    },
    {
        id: 2,
        title: "Jeylo electricidad",
        type: "Tiendas históricas",
        description: "<br>https://youtu.be/iP-HwA469j0<br><br>Una tienda histórica llevada  desde el 1963 para Jesús Medrano y su mujer Lolita que a los 85 años sigue atendiendo sus clientes",
        coordinates: [-0.035932, 39.987768],
        details: {
            address: "",
            category: "",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "❤️",
        images: [
            "https://via.placeholder.com/150/3357FF/FFFFFF?text=Foto+A",
            "https://via.placeholder.com/150/FF33A1/FFFFFF?text=Foto+B",
            "https://via.placeholder.com/150/33FFF6/FFFFFF?text=Foto+C"
        ]
    },
    {
        id: 3,
        title: "Discos Medicinales",
        type: "Tiendas históricas",
        description: "José Luis Roig, gestor de Discos Medicinales, en marcha desde 1983 hasta el verano 2019.<br><br><img src=\"https://lh3.googleusercontent.com/umsh/AN6v0v671dOPYYvuUF1vqNn18177OgDsW4x5TRg_mML7oDFYOoP6f38o0SR17mPOsk56zRdqfOcXQvdaRF0sL5ha7bRvN0CFMLAEtVLa6TeuaVz7DxQJJtMv_cDJ3hfDxmz9qw0IeQqSM1unS-We4tM3Qd7541FJtrplyT2pQmVdhZ9yRxNOju4bEv5WLEnjM9wmoT90ekCJWN28Ne2sdlnLHHElMOmMjIG70fHISurjBf9k_ZbTGtK-Rb0p0UrXXVGh81cxsp0p4eLSGkKyzUB319q0VVWKqRdl8tAHTQWKs6KCiv4I5H8iDDwizbRJeQgzAPUSpOniX88Wa4GrQJBITaKqY-hV99Ep_1v4Em40EHnxpdTQecaDDRoPKbgJJayVmoV6mSs80yOGH2Ca9p1OzUnImBKhlNb5A6f8xrlD6Axs2t7tX4JZj4A5mOs1pLxK5L0BqKoripJhi3PLhrteU6-FCPmISrDYBCnwNB6QDCA5rcT27vQ5gJHpIE61UiYyjbZ7tAWXQA_wPQlWU_ISMMaGhpq7l9wJazOCNoleJ0FAYzayd8KzODFCwX0pLTzKhDHo_zvyZvVsMxSGRjJqMwNBrxrgvsYwSh6q2GdC037wbgmOEwoofHJJQSlztgVgZUh1c3szNvtfQd2abzM9M6iAUcE9-g5usM-nQz0jDbWBDMpPE2HG7XKH6MwRYhU7b6_wnyxlVoNsz8ahwed_O6tZohIUJg\" height=\"200\" width=\"auto\" /><br>",
        coordinates: [-0.038213, 39.985078],
        details: {
            address: "",
            category: "",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "❤️",
        images: [
            "https://lh3.googleusercontent.com/umsh/AN6v0v79XEh1aA6AqRRqkmtf0i0opnyr_FSJ5WrgNGn_Fs-E5ykQAtlKdw5ApsR_cNCtLDb7ulqb6ogphjxAtIMyYvuXqZ3F3_0ZqEBYKO4O4QS94I7JVKEzUeJETpYmn9hLG-shhaa7M1kKkxjhY7IUD9G66Rw_sPLUpIZScCCR6GPdrOX5FvWrEOdb2VfdWsoXXfGobuaylKWi64masXGpygsL9fUAzaOeE2U_zKQtnNQqABBYaIHTwI5TuA2SVxUs_fWWW7M_hYq-xwEHBd3xrh_M4PIGlpgmOh7hDXILMlAhyWFyxXst_hvUIDdus3JqX3UsIDlhDFP3hKEEZpRf7UMwGstyJdPXx-UBpYDxo813SsBpdEoC5zZrLgNQolV72hBmgzfR3on5tCy3f3WEmvBr1YLOBJn5vytfs6S6hePtX0k_9CPD_9j-O0TYEw0j8xs5e5XqJUHNHDmIWkp_v-OoHqO_G4ki3Z9rClTlK5C1Jndjz8uhlqp1rp1CMMago6DeCyJrsbJ4qlTvUpsTtpFf5iNgypGG3c1dUOjLD1ClxPIqexy0vCbZ3hRrDHqL3hufGcbGJipAu9l-LoXfZUuSp-zAVPfBXBp9QKZu36FTKfLgxlTK3--5vE9XuCWJnGMdbRjYi7avVi2OREktdSnba3CowxtfvnUw0ZKTGBBrCY3u32yZOQoCLNVDq9gTPLJELmPA7fWToBKbBy8Fg-hMrArwNw=s16383",
            "https://lh3.googleusercontent.com/umsh/AN6v0v7LmZc5aeYIffYGnY_H4Aeu9TUxlp0qT92p_ab4lNkMNYtxo9zwLktHUlszliuV4YxuiBS69vdFRllAn4pIPhwAzQoJ_TdYrGw_iVxdtm9GYs630EvpFl5FUJaegOQ2B1N5JrzOudlP12-NqihYYhDovhEqKa62ULw_7z8AvXEsE2LliUAZJ1NUKk6-zU0cVp_65OKziFYI5TCDi2Es_f628FH1br-M_q3qDqJ6axQ-iyNTST_JEFnGil3gzpDLDa4R5A1p_YlsE6ZhQcsPxtXRuFIBwl8gmM4kd3z2JIH_Hk1XciefMC7z8pgyzLcLWvzqKOLZmuGy1p9V4QZ8S8tS7PY71e5Dk5Ji9nu67H_ujaPsgMjv3DaVdm-u50xVnmg07lLta3Xaz77C-14k_H9e76bzc-YAfaftAdzImvd5821alH_KPDZaI7t82SmfEbHu5yx4jq0coSk3t4hY3Z0cCsmMOpH409fFijTtcLQQVtHiIWjrLccVlKxQQ4WDhZTtD_C3S7t7GN7gcc6t8gzmq2Bte7O_X9_4K7Kg9MA9tsgsUVJwV5Xnrf7m81RgrwWwQJrssz8dL5UVybBStJJIxQAnxBwcS9kT5B181fp89qIaIGEZK8oJnKMD9GvxJTH38gev2UwFhA68hVlwrc1D_BdSCQaLQ6rG29iJZKtCoE6uDFAe6Tlzx4b2H58RG3lHN3QGubYYmOCtqHlLHOKtATg0xg=s16383",
            "https://lh3.googleusercontent.com/umsh/AN6v0v4qbbHu9HS7Us-IMpdNG780XjblLHDXGO31vNEQ8p6e5rbOBfE8iJoKK5qSsrYKvuZHBSwMby-wmYvDzfNvpjSnGS3xlO_ttVYZR0DMwzetAZfLQI0UmG2sHrFur2kS7wct1eb5d9ZnGu-Prtqen3_SQ8FcOyqiL_zQXC3zHi34fU2TSoBJyBHFILtDNWXiYQ6yWsz1YBTNFyRZmf6BI-vXgS83-4KpLyFPjujQ74lFWL5g9JSy1E1rXJsLnfhADn_8bBkiIuKvVjQTeEsRMWWmZz0dxE1uVjRn3p6atXRk1bFehCznq7HZUPUX2lh9b4yl-fwjv5nRBNnNdDBTOCNxr24ehVenlwuJ9LpmreofVKOPzbhRQQQ7Joh66FDptvYPsEiKfV7UwPl8xlVqXNszLbv002YU0vt5pb5lcPGQlh0yrGTgkaM4xmPwgVkJVqPnqpqwLUIm2Naw1mMHis7gw4YPn85-QS0Pq5iWRtnESpHLlgGfkYLgyhH3eoSK0f148r-tYUTk3FYoxX7vLH0CojJKyQ-RQWFEcIM_zsNGUjXlcIiiR3gEEEBZUJ4s5_Owy1jbpZZ8H0_AlWxXIJ6iyKK8fEbRj9jYCWVWdVKBErh_bsOs216rV3PU_ZfvHFZT_Pg8wBEFO8Wtm_p_GXD49FTZxt6CEc-GSxRvG4V5W57-uQLIAhUdPg1X8YuTHlWP7SlPZDnjoeVrAdENUw2Fr52wuQ=s16383",
            "https://lh3.googleusercontent.com/umsh/AN6v0v5fRuD0N7JfTm8h_XlUxGCAF0vaH_WMi8KHm0CvyOFMLdJi-9EaQIkrWQB0c2RWHOPlBIVjHxEiWxS02uT4Z9t_ODDtwmCUO0M0g8_6pbb1o8JKF3dPPUGbZmWQQTVtjPkNVBSmwQTP2vx6iKG-n437DOjE3J-P9Mwflreqa1bDwrLlfTqJJLTQ_JjKqUcdm8Nl7hZdLMWFtXULxIgB9FMy2YmdqeSMuFSSzUBwCmW4tiarMWTwHg3DS5Lwg4qsQnaELRFj47AZly2E8S80XynEFbvN4JNY49dJEXAUtYuCaGs5d8PPMVV_mLDwjmzg3ZKCW6bpqfRkXrOw_yzxfWisJ6CYEJ5MgSkRQG8qKL8O5sh5yejr9wSWf8ze1GByLwNUHXjB6ZO7VsohXwQcfveTBGWThm4Qk4W7Ia_eYDr210wrl6ulSvRYVKpMtMdwTuFdxMsXCiJ_iKG2JVbN40luzDQt_wd0o5SABcQzUHv7D_H_DAskbRlqqp25-dMVJp4svdGoO7_jAJXEFQGHXgOjF7vitWVK1MyHBcAp_007o429lNg_69RAIuyz7nCIGEiChnaoY_3lPkgzYTn3w4egsLzaliwfntZOKFPFThsR_jUJmVm7bKPyalIfIPVP62lSq_TYVTd-gftL5Id3ONjq91z7KJLp30IdQV3tQaWqZbFToi4R7cJM39jvLONbnepbnTM5nnCz0GzxmN5oWp5-eMiujQ=s16383",
            "https://lh3.googleusercontent.com/umsh/AN6v0v4-eZugf9LKjaklFRF7RQf4ZaoSYbQW1ANLOT2jYL86tMacp7ZjZuwsaxNuipkAH7vCjCmhdSYKrDyTYlTrxwm_KoMVVf2eK7DPaougOA8Ktnc2_QDP6PCuGg5QBa9q3hve70lPG2ZTicw5RjTIb3PRRaH7jE8Cyy7-gIdyW9iNhPimjs-TvUEwM4q1_kY6BM4-2tyqyX1BmZAhc9PFPSJZzVgE7qhlEQv59A89i4E0Fd6Viws_L4cy7YN_L0dJnFPqBUbFI-qvo0D7Dg22_SdgcZfV1qmsovCBiwmiwt1bIGbY-nkETk7maCtLgPOHWbbL14KF4yAc28zace2chmMvWxXB5cgxK38sbLc5-VLmdInzLwu4-cP__LRwt5ZOxVbeKKOcqtpaGpHFPsQu7dt6dmRkvk4E3rqzyLwbX2w5sBTKMNlDRKYrhIl9MpGGGKCpuIA8MQV1oRigOF6VGqxO31yXSl_X3h88sYspTrkY03kPW9SjUR3gjs1fb48o4vb5Rip2I6qVtoOph3Nhux_-_BzOKoKcHq_r47rInwBYi1Ypdxy2cFXvxTC9YGGZ4riLFUjR5UulPmvk1u5I-R9YlnFbva7b2L_BAN0K25sEN2_BLvIdOgk2KZNhYL_38S1AB2NLWyFcJ_J2cXEP1aW5lbIRlRe1k3qw-v4tXKxY6bzZccxP2wVs_A14WjX03G9hgsE76D_2fALJTF-cQsdy4E7TsA=s16383"
        ] // Nessuna immagine aggiuntiva per questo esempio
    },
    {
        id: 4,
        title: "Panadería y bolleria M. Fernandez",
        type: "Tiendas históricas",
        description: "",
        coordinates: [-0.036778, 39.986856],
        details: {
            address: "",
            category: "",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "❤️",
        images: [
            "https://lh3.googleusercontent.com/umsh/AN6v0v4Wn1q44usiNFHOsX6HToUuErBf17bB_-jYKiL1nLQaWZRhiEZx-nBKekrVSjL64Ba5susRSoiZBDENwHt6n_YmiRVTXvBGfdPP3F2ditvXrzEhuW7p_Y__IpkwNkmhWM1oy_IaGayehP9ZZzrA2PzAnmo4IAZtY2XcYfjP9zpljfVhbJZm-Bq7EsI08zSms-Y9Oew64Fi_-uaevT4UCckNJPO5U052nuXaD1A3v1WICbULp_THDjX0P3XifsFsBs84IvpgdzSwH9GDf10RM0k05VkvxDxHuQ-bJOlhv40VIfpCzl1VbgGJ5pYQNYcJvCGntrX4v2DbiFsWs4lYzpM9A0pTB5UHmyA1_sbjjIUGFwDziKX5081JEjE1Qupj8lzoWk6r8sSpfGpqn-uN8JHbUv8ILARQiz2J5maCwhYakaHG8HAXRe-lduJos--Q3pXc0qvJSJdNNAplsmX7NOAbV-TIvc7ccd0BavGl90JEo0pibwAzEFnCGzmSa9x6xA180pcMzrterNRnoUd-Jyw6A422XLP7uMTuT3QALylF1V2k5RimJzXXggj6Ezera5Ehl19OBQCd_S1nOY-Gu2GcqHOHRPrk9Htc-kQQ29ykM4poXr4Qgf4uqdyDboJ4T83iWeq0C1MoO4n_qwuWmpqATZNX2nIImnuvhzF7ztZ10IdCqm5pN-qkuKYZQ3AAHxS9hDl0s3OOQPJuN73zGu1YectItg=s16383"
        ]
    },
    {
        id: 5,
        title: "Cinema Saboya",
        type: "Tiendas históricas",
        description: "16-9-1941/2003 (Foto de Dejà Vu-Broocante en el mapa C/Vilaroig)<br>https://www.prospectosdecine.com/castellon--cine-saboya<br>",
        coordinates: [-0.03967, 39.984316],
        details: {
            address: "",
            category: "",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "❤️",
        images: [
            "https://lh3.googleusercontent.com/umsh/AN6v0v4q59enLB2sB-QK5BxiN_otMxi7NxMrMAcVogk5rYNRAXuCgJ9zRxc89sLyBVHM3FLsonKI7dsLiJ0I4esWPluSwnkaBLVS77lT4Ya3J-nCZnn14nY_ujIvVHtu7TOAXvbbjDiLDbmbYYriczivD8MCMv7nESUV8hvyy11P5Ryv2YFFNYa7n7_9eldxMDQHE-B8xA4VIsXF1SEIa1vhMi-CO8LjcIrph1I-gFe6RDHO6b9X9kFfyP8DXRC5LlMOkFvfb3DcvXtrSGKbkZd-hl5EOAWBLoZnwl4R9ph73knizUrsVjCiqCRNhPNG60TYQ8FIU3H7fGEg_OlzSCUCIYMk54WrjjlQhXZROVvH-MUFeKURVOBYALzof_V6txSTpe0T9i4tWrt3EAYEfGwVl2a1jETGfOTAmBcUFMrnrO2GOUhC-DHvfBU7GG3zz0MuhdURWvsX8iJb2xqHmMFXmFU1aFg31xfo96or31Eoy-xxep4rCTUF46Rq70WfHyCUngzTgvOOXvyTxPw46RhSDOYTvBNCAUSmctmTOw40waZwxEn2KPCKDZLFse-OVYnt-f97A8t-5Xborcvp4NB8uxf1R-TgMyyC3-bzbTZabEAfO23L_Yv0_CN_IBfyAO4k-VaR5MiNwW7EMcrX4HndLueBstqBwD2artYwlkiHUHmh2pk0OYwjGK6M9ULFMYLt0Yn6z7es5x3mQ47xqfV-08X0tLoD=s16383",
            "https://lh3.googleusercontent.com/umsh/AN6v0v490z587K2HXjUfr6USOp3rEb9EbZ7zV_hXcDmVKnjkV7oegeW2ddFaSouwW8x1-PQ538dqITHMUe2pnWFeAS5teIMH5hxn258cXSr-60bPKUMPyzTS-kc8d8d4kYD6EBs2RyfavFxlha_dq315YUJVyNThUW9OHDo7rzQPH6RWKunrQy-9Wynxe5E7AQl8ODIVLJ-yj3zA8ojd-3qsJPmUGto2AMJy8Lw8Qxz7AyRxzsBwBmC4j_UI4c_OA7UpZvNCOtuTKES-K54X4mxzoMvVe7xD8R8yrguKmo2Ei4j4-x6KAmgIjQm0cAqDAvdQj2PEVt30LcIvRAdqkkuhEs0IXSWpxmw9iUlQNHkXdcVSBHP80qrPdCBOUyZOHNzOiEsNh2GLfryR9DBsEz3P_HYDlFtGSJSsjk94lQF3SEOd-4oRn8cGg_dzHgw7G8vRsbQVm2xNm-epRvZ8DzA_-WmsHNNUXviyLvDXu09M5USK52EsCOjqlUt816NapcavNh3tVjqOYZ8TBJ5Vcw3e16M-3PQ6LyiCB0yQKEv4o6ONya4UsQLsStr5OH3fyfx2nzuhC1adO-amqNZuyrBTySUgvlPuf9vMP7Mc-8dhtybfCVrqC_s0XTdEEEgRYTvJH5KW7g71QoQPVtOHr7h2bndlaBX3mmkQdQlnC8-CXH3F56NFCbJveDC-HIrQ7UxKjqzZo9D-TvoEJiURFKybCqnvhArCSA=s16383"
        ]
    },
    {
        id: 6,
        title: "Panadería Virgilia",
        type: "Tiendas históricas",
        description: "Segunda generación de panaderos y pasteleros. Empresa artesanal fundada en 1968 para Virgilia y José. <br>Ofrece todos productos de panadería y pastelería típicos de Castellón.", 
        coordinates: [-0.033255, 39.991235],
        details: {
            address: "",
            category: "",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "❤️",
        images: []
    },
    {
        id: 7,
        title: "Tot Jove",
        type: "Tiendas históricas",
        description: "Desde el 1979 alta costura en la Calle Rafalafena. \"Amando mucho su trabajo, seleccionando las firmas que puedan ser del agrado del público que un día tras otro, ha permitido que Provi Sales siga aquí con la ilusión del primer día\"",
        coordinates: [-0.03248, 39.988396],
        details: {
            address: "",
            category: "",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "❤️",
        images: []
    },
    {
        id: 8,
        title: "Panadería J. Vives",
        type: "Tiendas históricas",
        description: "<br>Horno tradicional desde el 1908. % generaciones de panaderos y pasteleros.  <br>https://www.facebook.com/castelloenmapas/posts/2800364976956643",
        coordinates: [-0.037365, 39.992267],
        details: {
            address: "",
            category: "",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "❤️",
        images: []
    },
    {
        id: 9,
        title: "IMA Horchatería | Heladería",
        type: "Tiendas históricas",
        description: "IMA Horchatería & Heladería es un comercio histórico ❤️ de Castellón <br>https://youtu.be/4jz5cOw8igw<br>En IMA se puede traer su propio envase para rellenarlo de horchata artesanal o helado. Trayendo su propio envase: descuento de 0,40€ por litro de horchata, 0,50 por kg de helado y 0,20€ por 1/2 kg.  Más info en www.imahorchateria.com",
        coordinates: [-0.034195, 39.989696 ],
        details: {
            address: "",
            category: "",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "❤️",
        images: []
    },
    {
        id: 10,
        title: "Frutos Secos Saura",
        type: "Tiendas históricas",
        description: "Tienda tradicional de productos a granel: frutos secos, legumbres, arroz, harina, levadura (solo por Pascua), aceitunas, altramuces, etc.",
        coordinates: [-0.040336, 39.98984],
        details: {
            address: "",
            category: "",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "❤️",
        images: []
    },
     {
        id: 11,
        title: "Frutos Secos Nietas de J. Saura",
        type: "Tiendas históricas",
        description: "Se puede traer sus propios envases y rellenarlos de frutos secos, aceitunas, legumbres, etc.",
        coordinates: [-0.040328, 39.98229],
        details: {
            address: "",
            category: "",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "❤️",
        images: []
    },
    {
        id: 12,
        title: "Moto Aguilella, C. de Sogorb, 18",
        type: "Tiendas históricas",
        description: "Foto 2018. 2025 se ha jubilado.",
        coordinates: [-0.0404511, 39.9924294],
        details: {
            address: "",
            category: "",
            status: "",
            contact: "",
            notes: ""
        },
        icon: "❤️",
        images: []
    }
];

// Configurazione della mappa
const mapConfig = {
    accessToken: 'pk.eyJ1IjoidmluY3BhdHJ1bm8iLCJhIjoiY21nejJpemY2MDJpMzk0cjNyOWY1cXduYSJ9.d_43r4VO_yjEJc4vHgcmgw',
    center: [-0.051301, 39.984624], // Centro di Castellón de la Plana (adattato per i dati forniti)
    zoom: 13,
    minZoom: 10,
    maxZoom: 18,
    style: 'mapbox://styles/mapbox/light-v11'
};

// Variabili globali
let map;
let markers = [];
let currentLocation = null;
let currentPopup = null; // Aggiunto per tracciare il popup aperto

// Inizializzazione della mappa
function initMap() {
    mapboxgl.accessToken = mapConfig.accessToken;
    
    map = new mapboxgl.Map({
        container: 'map',
        style: mapConfig.style,
        center: mapConfig.center,
        zoom: mapConfig.zoom,
        minZoom: mapConfig.minZoom,
        maxZoom: mapConfig.maxZoom
    });
    
    // Aggiungi i controlli di navigazione
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    
    // Carica i marker sulla mappa
    addMarkers();
    
    // Popola la lista nella sidebar
    populateLocationList();
    
    // Aggiungi event listener ai pulsanti di controllo
    document.getElementById('zoomIn').addEventListener('click', () => {
        map.zoomTo(map.getZoom() + 1, { duration: 300 });
    });
    
    document.getElementById('zoomOut').addEventListener('click', () => {
        map.zoomTo(map.getZoom() - 1, { duration: 300 });
    });
    
    document.getElementById('resetView').addEventListener('click', () => {
        map.flyTo({
            center: mapConfig.center,
            zoom: mapConfig.zoom,
            duration: 1000
        });
    });
    
    // --- LOGICA TAB ---
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', handleTabSwitch);
    });
    
    // Seleziona il primo punto di default e attiva la tab "Lista"
    if (locations.length > 0) {
        selectLocation(locations[0].id);
        // Assicurati che la tab "Lista" sia attiva all'avvio (già fatto in HTML, ma per sicurezza)
        activateTab('list');
    } else {
        // Se non ci sono punti, attiva la tab "Lista"
        activateTab('list');
    }
    // --- FINE LOGICA TAB ---
}

// Gestione del cambio di tab
function handleTabSwitch(event) {
    const tabId = event.currentTarget.dataset.tab;
    
    // Rimuovi la classe 'active' da tutti i pulsanti e contenuti
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Aggiungi la classe 'active' al pulsante e al contenuto selezionato
    event.currentTarget.classList.add('active');
    document.getElementById(`${tabId}Content`).classList.add('active');
}

// Aggiungi marker sulla mappa
function addMarkers() {
    locations.forEach(location => {
        // Crea un elemento DOM per il marker
        const markerElement = document.createElement('div');
        markerElement.className = `marker type-${location.type === 'Punto di raccolta' ? 2 : 1}`;
        markerElement.innerHTML = location.icon;
        
        // Crea il marker
        const marker = new mapboxgl.Marker(markerElement)
            .setLngLat(location.coordinates)
            .addTo(map);
        
	        // Non assegniamo il popup al marker qui, lo gestiamo con openPopup
	        // per avere un controllo centralizzato e poterlo aprire dalla lista.
	        // Il popup verrà creato e aperto dinamicamente.
	        // marker.setPopup(popup);
        
        // Aggiungi event listener al marker
        markerElement.addEventListener('click', () => {
            // Chiama la nuova funzione per gestire l'apertura del popup e la selezione
            handleMarkerClick(location.id);
            openPopup(location); // Apri il popup anche al click sul marker
        });
        
        markers.push({ marker, location });
    });
}

// Funzione helper per attivare una tab
function activateTab(tabId) {
    // Rimuovi la classe 'active' da tutti i pulsanti e contenuti
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Aggiungi la classe 'active' al pulsante e al contenuto selezionato
    document.querySelector(`.tab-button[data-tab="${tabId}"]`).classList.add('active');
    document.getElementById(`${tabId}Content`).classList.add('active');
}

// Popola la lista dei punti di interesse nella sidebar
function populateLocationList() {
    const locationList = document.getElementById('locationList');
    const locationCount = document.getElementById('locationCount');
    
    if (locations.length === 0) {
        locationList.innerHTML = '<div class="empty-state"><i class="fas fa-map-marker-alt"></i><p>Nessun punto di interesse trovato</p></div>';
        locationCount.textContent = '0 punti';
        return;
    }
    
    locationList.innerHTML = '';
    
    locations.forEach(location => {
        const item = document.createElement('div');
        item.className = 'location-item';
        item.id = `location-${location.id}`;
        
        const iconClass = location.type === 'Punto di raccolta' ? 'type-2' : 'type-1';
        
        item.innerHTML = `
            <div class="location-icon ${iconClass}">
                ${location.icon}
            </div>
            <div class="location-info">
                <h3>${location.title}</h3>
                <p>${location.type}</p>
            </div>
        `;
        
        item.addEventListener('click', () => {
            // Al click sulla lista, apri il popup e centra la mappa
            handleListItemClick(location.id);
        });
        locationList.appendChild(item);
    });
    
    locationCount.textContent = `${locations.length} punti`;
}

// Seleziona un punto di interesse
/**
 * Funzione principale per selezionare un punto e aggiornare la sidebar.
 * @param {number} locationId - ID del punto selezionato.
 */
function selectLocation(locationId) {
    currentLocation = locations.find(loc => loc.id === locationId);
    
    if (!currentLocation) return;
    
    // Aggiorna la classe attiva nella lista
    document.querySelectorAll('.location-item').forEach(item => {
        item.classList.remove('active');
    });
    const selectedItem = document.getElementById(`location-${locationId}`);
    if (selectedItem) {
        selectedItem.classList.add('active');
        // Scrolla l'elemento selezionato in vista nella lista
        selectedItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    // Aggiorna il contenuto della tab "Descrizione"
    updateDescriptionTab();
    
    // Aggiorna il contenuto della tab "Immagini"
    updateImagesTab();
}

/**
 * Gestisce il click sul marker: seleziona il punto e apre la tab descrizione.
 * @param {number} locationId - ID del punto.
 */
function handleMarkerClick(locationId) {
    selectLocation(locationId);
    activateTab('description');
}

/**
 * Gestisce il click sull'elemento della lista: seleziona il punto, apre il popup e centra la mappa.
 * @param {number} locationId - ID del punto.
 */
function handleListItemClick(locationId) {
    const location = locations.find(loc => loc.id === locationId);
    if (!location) return;

    // 1. Seleziona il punto (aggiorna sidebar)
    selectLocation(locationId);

    // 2. Centra la mappa sul punto
    map.flyTo({
        center: location.coordinates,
        zoom: 15,
        duration: 1000
    });

    // 3. Apri il popup
    openPopup(location);
}

/**
 * Apre il popup sulla mappa per la location specificata.
 * @param {object} location - L'oggetto location da visualizzare.
 */
function openPopup(location) {
    // Chiudi il popup precedente se esiste
    if (currentPopup) {
        currentPopup.remove();
    }

    // Crea il contenuto del popup
    const popupContent = `
        <div class="popup-content">
            <h3>${location.title}</h3>
            <p>${location.type}</p>
            <button class="popup-button" onclick="selectLocation(${location.id}); activateTab('description');">
                Visualizza dettagli
            </button>
        </div>
    `;

    // Crea il popup
    currentPopup = new mapboxgl.Popup({ offset: 25, closeButton: false })
        .setLngLat(location.coordinates)
        .setHTML(popupContent)
        .addTo(map);
}

// Aggiorna il contenuto della tab "Descrizione"
function updateDescriptionTab() {
    const detailTitle = document.getElementById('detailTitle');
    const detailType = document.getElementById('detailType');
    const detailBody = document.getElementById('detailBody');
    
    if (!currentLocation) {
        detailTitle.textContent = "Seleziona un Punto";
        detailType.textContent = "Nessun punto selezionato";
        detailBody.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-hand-point-left"></i>
                <p>Clicca su un punto sulla mappa o selezionalo dalla lista per visualizzarne i dettagli.</p>
            </div>
        `;
        return;
    }
    
    detailTitle.textContent = currentLocation.title;
    detailType.textContent = currentLocation.type;
    
    let detailHTML = `
        <p>${currentLocation.description}</p>
        <div class="detail-field">
            <strong>📍 INDIRIZZO</strong>
            <span>${currentLocation.details.address}</span>
        </div>
        <div class="detail-field">
            <strong>🏷️ CATEGORIA</strong>
            <span>${currentLocation.details.category}</span>
        </div>
        <div class="detail-field">
            <strong>📊 STATO</strong>
            <span>${currentLocation.details.status}</span>
        </div>
        <div class="detail-field">
            <strong>📧 CONTATTO</strong>
            <span><a href="mailto:${currentLocation.details.contact}">${currentLocation.details.contact}</a></span>
        </div>
        <div class="detail-field">
            <strong>📝 NOTE</strong>
            <span>${currentLocation.details.notes}</span>
        </div>
    `;
    
    detailBody.innerHTML = detailHTML;
}

// Aggiorna il contenuto della tab "Immagini"
function updateImagesTab() {
    const imagesContent = document.getElementById('imagesContent');
    const imageGallery = document.getElementById('imageGallery');
    
    if (!currentLocation || !currentLocation.images || currentLocation.images.length === 0) {
        imagesContent.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-camera"></i>
                <p>Nessuna immagine disponibile per questo punto.</p>
            </div>
        `;
        return;
    }
    
    let galleryHTML = '';
    currentLocation.images.forEach(imageURL => {
        galleryHTML += `<img src="${imageURL}" alt="Immagine di ${currentLocation.title}" onclick="window.open('${imageURL}', '_blank')">`;
    });
    
    imagesContent.innerHTML = `
        <div class="image-gallery">
            ${galleryHTML}
        </div>
    `;
}

// Inizializza la mappa quando il DOM è pronto
document.addEventListener('DOMContentLoaded', initMap);

// Esporta le funzioni per uso globale
window.selectLocation = selectLocation;
window.activateTab = activateTab; // Rendi la funzione di attivazione tab disponibile globalmente per i popup
// Rimuovi window.closeDetailCard in quanto non più necessaria
window.handleListItemClick = handleListItemClick; // Esporta per l'uso nell'HTML se necessario, anche se qui non lo è.
window.openPopup = openPopup; // Esporta per l'uso nell'HTML se necessario, anche se qui non lo è.
