import { test, expect, describe } from "vitest";
import { getIdFromShowName } from "./utils";

const testData = [
    {
        "id": 256,
        "url": "https://www.tvmaze.com/shows/256/comic-book-men",
        "name": "Comic Book Men",
        "type": "Reality",
        "language": "English",
        "genres": [
          "Comedy"
        ],
        "status": "Ended",
        "runtime": 30,
        "averageRuntime": 30,
        "premiered": "2012-02-12",
        "ended": "2018-04-08",
        "officialSite": "http://www.amc.com/shows/comic-book-men",
        "schedule": {
          "time": "00:00",
          "days": [
            "Sunday"
          ]
        },
        "rating": {
          "average": 7.4
        },
        "weight": 49,
        "network": {
          "id": 20,
          "name": "AMC",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          },
          "officialSite": null
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
          "tvrage": 30604,
          "thetvdb": 254990,
          "imdb": "tt2174367"
        },
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/1/4661.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/1/4661.jpg"
        },
        "summary": "\u003Cp\u003EAMC's popular unscripted series \u003Cb\u003EComic Book Men\u003C/b\u003E takes another dive into world of geekdom by following the antics in and around master fanboy Kevin Smith's New Jersey comic shop, Jay and Silent Bob's Secret Stash. Leading the team behind the shop's counter are Walt, Bryan, Michael and Ming, who geek out over mind-blowing pop culture artifacts and the legends behind them. Whether it's buying and selling memorabilia or embarking on wild adventures away from the store, the Stash cast shares all the juicy details with Kevin during their hilarious podcast, which is woven in throughout the series.\u003C/p\u003E",
        "updated": 1704793662,
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/shows/256"
          },
          "previousepisode": {
            "href": "https://api.tvmaze.com/episodes/1437175",
            "name": "Pop Goes the Stash"
          }
        }
      },
      {
        "id": 257,
        "url": "https://www.tvmaze.com/shows/257/key-peele",
        "name": "Key & Peele",
        "type": "Scripted",
        "language": "English",
        "genres": [
          "Comedy"
        ],
        "status": "Ended",
        "runtime": 30,
        "averageRuntime": 30,
        "premiered": "2012-01-31",
        "ended": "2015-09-09",
        "officialSite": "http://www.cc.com/shows/key-and-peele",
        "schedule": {
          "time": "22:00",
          "days": [
            "Wednesday"
          ]
        },
        "rating": {
          "average": 7.5
        },
        "weight": 92,
        "network": {
          "id": 23,
          "name": "Comedy Central",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          },
          "officialSite": "https://www.cc.com/"
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
          "tvrage": 30543,
          "thetvdb": 255325,
          "imdb": "tt1981558"
        },
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/1/4662.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/1/4662.jpg"
        },
        "summary": "\u003Cp\u003EKeegan-Michael Key and Jordan Peele are the stars of \u003Cb\u003EKey &amp; Peele\u003C/b\u003E, a show that examines life in a distinctively provocative and irreverent way. Whether it's anger-translating the president, spoofing Nazis or ordering up some soul food, Key &amp; Peele showcases the guys' camaraderie and unique point of view, born from their experiences growing up biracial in a not-quite-post-racial world.\u003C/p\u003E",
        "updated": 1704793911,
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/shows/257"
          },
          "previousepisode": {
            "href": "https://api.tvmaze.com/episodes/216653",
            "name": "The End"
          }
        }
      },
      {
        "id": 258,
        "url": "https://www.tvmaze.com/shows/258/glue",
        "name": "Glue",
        "type": "Scripted",
        "language": "English",
        "genres": [
          "Drama"
        ],
        "status": "Ended",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2014-09-15",
        "ended": "2014-11-03",
        "officialSite": "http://www.channel4.com/programmes/glue",
        "schedule": {
          "time": "22:00",
          "days": [
            "Monday"
          ]
        },
        "rating": {
          "average": 7.4
        },
        "weight": 69,
        "network": {
          "id": 41,
          "name": "E4",
          "country": {
            "name": "United Kingdom",
            "code": "GB",
            "timezone": "Europe/London"
          },
          "officialSite": null
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
          "tvrage": 44288,
          "thetvdb": 284409,
          "imdb": "tt3868832"
        },
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/118/295401.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/118/295401.jpg"
        },
        "summary": "\u003Cp\u003EBafta-winning writer Jack Thorne's compelling eight-part drama series about murder and secrets set in the English countryside.\u003C/p\u003E",
        "updated": 1704793800,
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/shows/258"
          },
          "previousepisode": {
            "href": "https://api.tvmaze.com/episodes/21479",
            "name": "Eli/James"
          }
        }
      },
      {
        "id": 259,
        "url": "https://www.tvmaze.com/shows/259/southern-justice",
        "name": "Southern Justice",
        "type": "Reality",
        "language": "English",
        "genres": [
          "Crime"
        ],
        "status": "Ended",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2014-04-15",
        "ended": "2017-07-12",
        "officialSite": "http://channel.nationalgeographic.com/southern-justice/",
        "schedule": {
          "time": "21:00",
          "days": [
            "Wednesday"
          ]
        },
        "rating": {
          "average": null
        },
        "weight": 44,
        "network": {
          "id": 42,
          "name": "National Geographic",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          },
          "officialSite": "https://www.nationalgeographic.com/tv/"
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
          "tvrage": 41957,
          "thetvdb": 281164,
          "imdb": "tt3823972"
        },
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/304/760085.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/304/760085.jpg"
        },
        "summary": "\u003Cp\u003EFollow the Sheriff Deputies of Sullivan County, TN and Ashe County, NC as they work to keep the peace in the Blue Ridge Mountains on \u003Cb\u003ESouthern Justice\u003C/b\u003E. Get an unprecedented look into crime in Appalachia, where guns, drugs and alcohol challenge lawmen 24/7.\u003C/p\u003E",
        "updated": 1704795361,
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/shows/259"
          },
          "previousepisode": {
            "href": "https://api.tvmaze.com/episodes/1242334",
            "name": "Wanted Women"
          }
        }
      },
      {
        "id": 260,
        "url": "https://www.tvmaze.com/shows/260/tosh0",
        "name": "Tosh.0",
        "type": "Variety",
        "language": "English",
        "genres": [
          "Comedy"
        ],
        "status": "Ended",
        "runtime": 30,
        "averageRuntime": 30,
        "premiered": "2009-06-04",
        "ended": "2020-11-24",
        "officialSite": "http://tosh.cc.com/",
        "schedule": {
          "time": "22:00",
          "days": [
            "Tuesday"
          ]
        },
        "rating": {
          "average": 6.2
        },
        "weight": 91,
        "network": {
          "id": 23,
          "name": "Comedy Central",
          "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
          },
          "officialSite": "https://www.cc.com/"
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
          "tvrage": 22690,
          "thetvdb": 97731,
          "imdb": "tt1430587"
        },
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/304/760414.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/304/760414.jpg"
        },
        "summary": "\u003Cp\u003E\u003Cb\u003ETosh.0\u003C/b\u003E is a weekly topical series that delves into all aspects of the Internet, featuring razor sharp humor and biting commentary from comedian Daniel Tosh. From the absolutely absurd to the incredibly ingenious, the series features viral clips, sketches, and \"Web Redemptions\" which give subjects of infamous viral videos a second chance to redeem themselves from the embarrassment with which they've become synonymous. Now in its third hit season, Tosh.0 continues to be cable TV's most trusted source for exhibitionist weirdos, injurious idiots and all things Web.\u003C/p\u003E",
        "updated": 1716176553,
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/shows/260"
          },
          "previousepisode": {
            "href": "https://api.tvmaze.com/episodes/1971187",
            "name": "The Masked CeWEBrity Singer"
          }
        }
      },
]

describe("getIdFromShowName", () => {
    test("returns a number", () => {
        expect(typeof getIdFromShowName("", [])).toBe("number")
    });
    test("returns correct code for a given show name", () => {
        expect(getIdFromShowName("Comic Book Men", testData)).toBe(256)
        expect(getIdFromShowName("Glue", testData)).toBe(258)
        expect(getIdFromShowName("Southern Justice", testData)).toBe(259)
    });
    test("returns a number", () => {
        // expect().toBe()
    });
    test("returns a number", () => {
        // expect().toBe()
    });
    test("returns a number", () => {
        // expect().toBe()
    })
})