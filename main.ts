while (true) {
    console.log(input.acceleration(Dimension.Y))
    if (input.acceleration(Dimension.Y) > 0 || input.acceleration(Dimension.Y) < 0) {
        light.setAll(light.rgb(255, 0, 0))
    } else {
        light.clear()
    }
    
}
