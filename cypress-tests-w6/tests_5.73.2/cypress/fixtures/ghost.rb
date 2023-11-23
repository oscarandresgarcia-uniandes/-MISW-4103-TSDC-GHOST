case field("type")
when "color" then
when "text" then
    generate("Regular Expression", "[a-z]{3} [a-z]{4}")
when "boolean" then
  generate("Boolean")
when "select" then
  case field("key")
  when "title_font" then
    ["Modern sans-serif", "Elegant Serif", "Consistent mono"].sample
  when "post_feed_style" then
    ["List", "Grid"].sample
  when "navigation_layout" then
    ["Logo on the left", "Logo in the middle", "Stacked"].sample
when "signup_heading" then
    generate("Regular Expression", "[a-z]{3} [a-z]{4}")
when "signup_subheading" then
    generate("Regular Expression", "[a-z]{3} [a-z]{4}")
  when "site_background_color" then
    generate("Hex Color")
  when "header_style" then
    ["Landing", "Subpage"].sample
when "header_text" then
    generate("Regular Expression", "[a-z]{3} [a-z]{4}")
  when "header_and_footer_color" then
    ["Background color", "Accent color"].sample
  when "body_font" then
    ["Modern sans-serif", "Elegant serif"].sample
   when "background_image" then
    generate("Boolean")
  end
end


