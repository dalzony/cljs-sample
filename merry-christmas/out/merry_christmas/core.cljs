(ns merry-christmas.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def images [:santa])
(def image-size 2000)

(defn load-image [image]
  (let [path (str "./resources/" (name image) ".png")]
    (q/request-image path)))

(defn draw-image [state k [x y]]
  (q/image (get-in state [:images k]) x y))

(defn setup []
  (q/frame-rate 30)
  (q/color-mode :rgb)
  (q/image-mode :center)
  {:images (zipmap images (map load-image images))})

(defn draw-state [state]
  (let [w (q/width)
        h (q/height)]
    (q/with-translation [(/ w 2) (/ h 2)]
      (q/scale (/ (min w h) (* 2 image-size)))
      (q/background 89 117 80)

      (q/with-translation [0 0]
        (draw-image state :santa [0 0]))
      (q/pop-matrix)

      (q/fill 255 (* 255 (:fade state))))))

(q/defsketch merry-christmas
  :host "merry-christmas"
  :size [500 500]
  :setup setup
  :draw draw-state
  :middleware [m/fun-mode])
