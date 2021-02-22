module.exports = {
    nets: ['from', 'to'],
    params: {
      class: 'S'
    },
    body: p => `
  
      (module MX_Hotswap (layer F.Cu) (tedit 5DD4F656)

        ${p.at /* parametric position */}
  
        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 7.1 8.2) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
        
        ${'' /* silk stuff */}
        (fp_line (start -7 7) (end -6 7) (layer Dwgs.User) (width 0.15))
        (fp_line (start 7 -7) (end 7 -6) (layer Dwgs.User) (width 0.15))
        (fp_line (start -7 -7) (end -6 -7) (layer Dwgs.User) (width 0.15))
        (fp_line (start 7 7) (end 7 6) (layer Dwgs.User) (width 0.15))
        (fp_line (start 6 7) (end 7 7) (layer Dwgs.User) (width 0.15))
        (fp_line (start -7 6) (end -7 7) (layer Dwgs.User) (width 0.15))
        (fp_line (start 7 -7) (end 6 -7) (layer Dwgs.User) (width 0.15))
        (fp_line (start -7 -6) (end -7 -7) (layer Dwgs.User) (width 0.15))
        (fp_line (start -9.525 9.525) (end -9.525 -9.525) (layer Dwgs.User) (width 0.15))
        (fp_line (start 9.525 9.525) (end -9.525 9.525) (layer Dwgs.User) (width 0.15))
        (fp_line (start 9.525 -9.525) (end 9.525 9.525) (layer Dwgs.User) (width 0.15))
        (fp_line (start -9.525 -9.525) (end 9.525 -9.525) (layer Dwgs.User) (width 0.15))
        (fp_line (start -5.8 -4.05) (end -5.8 -4.7) (layer B.SilkS) (width 0.3))
        (fp_line (start -5.3 -1.6) (end -5.3 -3.399999) (layer B.SilkS) (width 0.8))
        (fp_line (start -4.17 -5.1) (end -4.17 -2.86) (layer B.SilkS) (width 3))
        (fp_line (start 4.2 -3.25) (end 2.9 -3.3) (layer B.SilkS) (width 0.5))
        (fp_line (start 3.9 -6) (end 3.9 -3.5) (layer B.SilkS) (width 1))
        (fp_line (start 2.6 -4.8) (end -4.1 -4.8) (layer B.SilkS) (width 3.5))
        (fp_line (start 4.4 -3) (end 4.4 -6.6) (layer B.SilkS) (width 0.15))
        (fp_line (start 4.38 -4) (end 4.38 -6.25) (layer B.SilkS) (width 0.15))
        (fp_line (start -5.9 -3.95) (end -5.7 -3.95) (layer B.SilkS) (width 0.15))
        (fp_line (start -5.65 -5.55) (end -5.65 -1.1) (layer B.SilkS) (width 0.15))
        (fp_line (start -5.9 -4.7) (end -5.9 -3.95) (layer B.SilkS) (width 0.15))
        (fp_line (start -5.65 -1.1) (end -2.62 -1.1) (layer B.SilkS) (width 0.15))
        (fp_line (start -0.4 -3) (end 4.4 -3) (layer B.SilkS) (width 0.15))
        (fp_line (start 4.4 -6.6) (end -3.800001 -6.6) (layer B.SilkS) (width 0.15))
        (fp_arc (start -0.465 -0.83) (end -0.4 -3) (angle -84) (layer B.SilkS) (width 0.15))
        (fp_arc (start -3.9 -4.6) (end -3.800001 -6.6) (angle -90) (layer B.SilkS) (width 0.15))
        (fp_arc (start -0.865 -1.23) (end -0.8 -3.4) (angle -84) (layer B.SilkS) (width 1))
        (fp_line (start -5.45 -1.3) (end -3 -1.3) (layer B.SilkS) (width 0.5))
        (fp_line (start 4.25 -6.4) (end 3 -6.4) (layer B.SilkS) (width 0.4))

        ${'' /* holes */}
        (pad "" np_thru_hole circle (at 2.54 -5.08) (size 3 3) (drill 3) (layers *.Cu *.Mask))
        (pad "" np_thru_hole circle (at -3.81 -2.54) (size 3 3) (drill 3) (layers *.Cu *.Mask))
        (pad "" np_thru_hole circle (at -5.08 0) (size 1.9 1.9) (drill 1.9) (layers *.Cu *.Mask))
        (pad "" np_thru_hole circle (at 5.08 0) (size 1.9 1.9) (drill 1.9) (layers *.Cu *.Mask))
        (pad "" np_thru_hole circle (at 0 0 90) (size 4.1 4.1) (drill 4.1) (layers *.Cu *.Mask))

        ${'' /* net pads */}
        (pad 1 smd rect (at -7.085 -2.54 180) (size 2.55 2.5) (layers B.Cu B.Paste B.Mask) ${p.net.from})
        (pad 2 smd rect (at 5.842 -5.08 180) (size 2.55 2.5) (layers B.Cu B.Paste B.Mask) ${p.net.to})
      )
  
    `
  }