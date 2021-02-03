while True: 
    print(input.acceleration(Dimension.Y))
    if input.acceleration(Dimension.Y) > 0 or input.acceleration(Dimension.Y) < 0:
        light.set_all(light.rgb(255, 0, 0))
    else:
        light.clear()


